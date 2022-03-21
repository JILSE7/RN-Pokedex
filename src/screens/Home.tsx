//!ERROR: KEYEXTRACTOR FOR DATE.NOW()
//? Al momento de desmontarse, ya no encuentra el id por la hora, por eso vuelve a recargar todo
/* import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { GlobalStyles } from '../styles/GlobalStyles';
import usePokemonPaginate from '../hooks/usePokemonPaginate';
import PokemonCard from '../components/PokemonCard';


interface Iprops extends StackScreenProps<any,any>{};
const Home = ({navigation}:Iprops) => {
    const {top} = useSafeAreaInsets();
    const { pokemonList,loadPokemons} = usePokemonPaginate();


    return (
        <View style={{marginTop: top}}>
            <Image 
             source={require('../assets/pokebola.png')}
             style={GlobalStyles.pokebolaBG}
            />
           
            <FlatList
                data={pokemonList}
                renderItem={({item}) => <PokemonCard pokemon={item}/>}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={(pokemon) => pokemon.id.toString() + Date.now()}
                onEndReachedThreshold={0.4}
                onEndReached={() => loadPokemons()}
                //Header
                ListHeaderComponent={() =>  <Image source={require('../assets/logo3.png')} style={{width:180, height:80, marginVertical: top + 20}}/>} //<Text style={{...GlobalStyles.title, ...GlobalStyles.globalMargin, marginBottom:top + 20}}>Pokedex</Text>
                //Footer
                ListFooterComponent={() => <ActivityIndicator style={{height: 100, marginBottom: top + 20}}  color="orange" size={30}/>} 
            />
        </View>
    );
}
export default Home; */

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
    const { pokemonList,loadPokemons} = usePokemonPaginate();


    return (
        <View style={{marginTop: top}}>
            <Image 
             source={require('../assets/pokebola.png')}
             style={GlobalStyles.pokebolaBG}
            />
           
          
           <FlatList 
                    data={ pokemonList }
                    keyExtractor={ (pokemon) => pokemon.id }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }

                    renderItem={ ({ item }) => ( <PokemonCard pokemon={ item } /> )}

                    // infinite scroll
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.2 }
                    ListHeaderComponent={() =>  <Image source={require('../assets/logo3.png')} style={{width:180, height:80, marginVertical: top + 20}}/>} 
                    ListFooterComponent={( 
                        <ActivityIndicator 
                            style={{ height: 100 }} 
                            size={ 20 }
                            color="grey"
                        /> 
                    )}
                />
            </View>
    );
}
export default Home;

