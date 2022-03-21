import React, { useEffect, useState } from 'react';
import { IPokemonId } from '../interfaces/PokemonId';
import axios from 'axios';


const usePokemon = (id:string) => {

    const [isLoading, setisLoading] = useState(true);
    const [fullPokemon, setfullPokemon] = useState<IPokemonId>({} as IPokemonId);

    

    async function getPokemonId(){
        const response = await axios.get<IPokemonId>(`https://pokeapi.co/api/v2/pokemon/${id}`);

        setfullPokemon(response.data);
        setisLoading(false)
    }

    useEffect(() => {
        getPokemonId();
    }, [])
    
    console.log(fullPokemon);

    return {
        isLoading,
        fullPokemon
    }
}
export default usePokemon;

