import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { GlobalStyles } from '../styles/GlobalStyles';
import usePokemonPaginate from '../hooks/usePokemonPaginate';
import PokemonCard from '../components/PokemonCard';


interface Iprops extends StackScreenProps<any,any>{};
const Home = ({navigation}:Iprops) => {
    const {top} = useSafeAreaInsets();
    const {isLoading, pokemonList,loadPokemons} = usePokemonPaginate();


    return (
        <View style={{marginTop: top}}>
            <Image 
             source={require('../assets/pokebola.png')}
             style={GlobalStyles.pokebolaBG}
            />
           
            <FlatList
                data={pokemonList}
                renderItem={({item}) => <PokemonCard pokemon={item}/>}
                numColumns={2}
                keyExtractor={(pokemon) => pokemon.id.toString() + Date.now()}
                onEndReachedThreshold={0.5}
                onEndReached={() => loadPokemons()}
                //Header
                ListHeaderComponent={() =>  <Image source={require('../assets/logo3.png')} style={{width:180, height:80, marginVertical: top + 20}}/>} //<Text style={{...GlobalStyles.title, ...GlobalStyles.globalMargin, marginBottom:top + 20}}>Pokedex</Text>
                //Footer
                ListFooterComponent={() => <ActivityIndicator style={{height: 100, marginBottom: top + 20}}  color="orange" size={30}/>} 
            />
        </View>
    );
}
export default Home;

const styles = StyleSheet.create({

});