import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../views/home/HomeScreen';
import { PokemonsScreen } from '../views/pokemons/PokemonsScreen';
import { SettingScreen } from '../views/home/SettingScreen';
import { PokemonScreen } from '../views/pokemons/PokemonScreen';

export type RootStackParamList = {
    Home: undefined;
    Pokemons: undefined;
    Setting: undefined;
    Pokemon: {name:string, imageUrl: string, id: number};
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
            headerStyle: {
                shadowColor: 'transparent',
                backgroundColor: '#f4511e',
            }
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokemons" component={PokemonsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  )
}
