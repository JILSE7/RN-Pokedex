import React, { useEffect, useRef, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { pokemonApi } from '../api/pokemonAPI';
import { IPokemonResponse, IPokemonItem, IResultItem } from '../interfaces/PokemonInterfaces';

const usePokemonPaginate = () => {
    
    const nextUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=40");
    const [isLoading, setisLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState<IPokemonItem[]>([]);


    const loadPokemons = async() => {
        setisLoading(true);
        const resp = await pokemonApi.get<IPokemonResponse>(nextUrl.current);
        nextUrl.current =  resp.data.next;
        mapPokemonList(resp.data.results);
        
        
    }

    const mapPokemonList = (data:IResultItem[]) => {

        const newPokemonList:IPokemonItem[] =  data.map(({name,url}) => {
            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
            
            return { id, picture, name };
        });

        setPokemonList([...pokemonList, ...newPokemonList]);
        setisLoading(false);
    }

    useEffect(() => {
        loadPokemons();
        
    }, [])

    return{
        isLoading,
        pokemonList,
        loadPokemons
    }
    
   
}
export default usePokemonPaginate;
