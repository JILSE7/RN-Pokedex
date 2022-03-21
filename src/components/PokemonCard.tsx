import React from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity, Dimensions} from 'react-native';

import { IPokemonItem } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface PokemonCardProps {
    pokemon: IPokemonItem
}

const windowWidth = Dimensions.get('window').width;
const PokemonCard: React.FC<PokemonCardProps> = ({pokemon}) => {
    return (
        <TouchableOpacity activeOpacity={0.9}>
            <View style={{...styles.cardContainer, width:windowWidth * 0.45}}>
                <View style={{justifyContent:"space-around", flexDirection:"row"}}>
                    <Text>{pokemon.name}</Text>
                    <Text>#{pokemon.id}</Text>
                </View>
                <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokebolaBlanca}/>
                <FadeInImage uri={pokemon.picture} style={{...styles.pokemonImage}}/>
            </View>
        </TouchableOpacity>
    );
}
export default PokemonCard;

const styles = StyleSheet.create({
    cardContainer: {
        height: 120,
        marginHorizontal: 10,
        marginBottom: 10,
        borderWidth:2,
        borderColor:"#f2c201",
        borderRadius: 10,
        backgroundColor:"rgba(36,38,138,1)",
        fontFamily: 'Quicksand'
        
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
            width:100, height:100
        }
});