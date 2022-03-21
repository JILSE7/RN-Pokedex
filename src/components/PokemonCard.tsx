import React, {useEffect, useState, useRef, memo} from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity, Dimensions} from 'react-native';
import { IPokemonItem } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';

import Icon from 'react-native-vector-icons/MaterialIcons'
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;


interface PokemonCardProps {
    pokemon: IPokemonItem
}
const PokemonCard: React.FC<PokemonCardProps> = memo(({pokemon}) => {
    const navigation = useNavigation()

    const [bgColor, setBgColor] = useState("");

    const isMounted = useRef(true);
    const colorCurrent = useRef("gray");
    const pokeScreen:string = "Pokemon";

    useEffect(() => {
        //ios background
        //andorid dominates
        ImageColors.getColors( pokemon.picture , { fallback: '' })
        .then( colors => {

            if ( !isMounted.current ) return;

                switch (colors.platform) {
                    case 'android':
                      setBgColor( colors.dominant! )
                      colorCurrent.current = colors.dominant!;
                      break
                    case 'ios':
                      // iOS result properties
                      setBgColor( colors.background!);
                      colorCurrent.current =  colors.background!
                      break
                    default:
                      throw new Error('Unexpected platform key')
                  }

        });

        return () => {
            isMounted.current = false
        }

            

        

    }, []);

    
    

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Pokemon' as never,{pokemon, color:colorCurrent.current} as never )}>
            <View style={{...styles.cardContainer, width:windowWidth * 0.45, backgroundColor:bgColor ? bgColor : colorCurrent.current}}>
                <View style={{justifyContent:"space-around", flexDirection:"row"}}>
                    <Text style={styles.titlePokebola}>{pokemon.name}</Text>
                    
                    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <View style={{paddingLeft: 25}}/>
                        <Icon  size={25} name="tag" color={"white"}/> 
                        <Text style={{...styles.titlePokebola,marginLeft: -5, fontWeight: "bold"}}> {pokemon.id}</Text>
                    </View>
                </View>
                <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokebolaBlanca}/>
                <FadeInImage uri={pokemon.picture} style={{...styles.pokemonImage}}/>
            </View>
        </TouchableOpacity>
    );
})
export default PokemonCard;

const styles = StyleSheet.create({
    cardContainer: {
        height: 120,
        marginHorizontal: 10,
        marginBottom: 10,
        borderWidth:2,
        borderColor:"#f2c201",
        borderRadius: 10,
        },
        pokebolaBlanca: {
            width:100,
            height:100,
            position:"absolute",
            bottom:-20,
            right:-20,
            opacity: 0.7
        },
        pokemonImage: {
            width:100, height:100,
        },
        titlePokebola: {
            fontSize:16,
            color:"white",
            
            
            
        }
});