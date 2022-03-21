import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';
import { IPokemonItem } from '../interfaces/PokemonInterfaces';


export type RootStackParams = {
    Home: undefined,
    Pokemon: {pokemon: IPokemonItem, color:string}
    
}

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                    cardStyle: {
                        backgroundColor:"white"
                    }
                    
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Pokemon" component={Pokemon} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;

