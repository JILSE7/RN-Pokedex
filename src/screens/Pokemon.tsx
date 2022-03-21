import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../router/Navigator';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';
import { IPokemonId } from '../interfaces/PokemonId';

interface IProps extends StackScreenProps<RootStackParams,'Pokemon'>{};


const Pokemon = ({route,navigation:{goBack}}:IProps) => {
    const {color,pokemon:{id,name,picture}} = route.params;
    const {top} = useSafeAreaInsets();

    const {isLoading, fullPokemon} = usePokemon(id);

    return (
        <View style={styles.container}>
            <View style={{...styles.pokemonContainer, backgroundColor:color}}>
                {/* BackButton */}
                <TouchableOpacity style={{...styles.backButton, top: top + 10}} onPress={goBack}>
                    <Icon name='arrow-back-ios' size={46} color={"white"}/>
                </TouchableOpacity>

                <Text style={{...styles.pokemonName, top: top + 20}}>{name + "\n"}#{id}</Text>

                <Image style={{...styles.backgroundPokebola}} source={require('../assets/pokebola-blanca.png')}/>

                <FadeInImage style={{...styles.pokemonImage}} uri={picture} />
            </View>

            {/* LOADING */}

            {
                showPokemon(isLoading, color, fullPokemon)
            }
            
            
            

        </View>
    );
}
export default Pokemon;

function showPokemon(isLoading:boolean, color:string, pokemon:IPokemonId):JSX.Element{
        return isLoading ? (
        <View style={styles.activityIndicator}>
                <ActivityIndicator size={120} color={color}/>
        </View>
    ) : <PokemonDetails pokemon={pokemon} color={color}/>

}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    pokemonContainer: {
        height:400, 
        zIndex: 999,
        alignItems:"center",
        borderBottomRightRadius: 500, 
        borderBottomLeftRadius: 500
    },
    backButton: {
        position:"absolute",
        left: 10,
    },
    pokemonName: {
        color:"white",
        fontSize: 50,
        textAlign:"center"
    },

    backgroundPokebola: {
        height: 250,
        width: 250,
        position:"absolute",
        bottom: 0,
    },
    pokemonImage: {
        width:350,
        height: 350,
        bottom:-35,
        position:"absolute"
    },
    activityIndicator: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});