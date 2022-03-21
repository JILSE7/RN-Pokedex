import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();


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
                <Stack.Screen name="Pokemons" component={Pokemon} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;

