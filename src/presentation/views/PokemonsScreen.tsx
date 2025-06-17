import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { RootStackParamList } from '../routes/StackNavigation';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import { PokemonUseCaseImpl } from '../../domain/useCase/implements/pokemonUseCaseImpl';
import { Pokemon } from '../../domain/entities/pokemon.entity';

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

export const PokemonsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [pokemons, setPokemons] = useState<Pokemon[]>();
        
    const {GetPokemonsUseCase} = new PokemonUseCaseImpl();

    const loadPokemons = async () => {
        try{
            const pokemonData = await GetPokemonsUseCase();
            setPokemons(pokemonData);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        loadPokemons();
    },[]);

    /*const pokemons = [
        {id: "1" , name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
        {id: "2" , name: 'Ivysaur' , imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
        {id: "3" , name: 'Venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'},
        {id: "4" , name: 'Charmander', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
        {id: "5" , name: 'Charmeleon', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'},
        {id: "6" , name: 'Charizard', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'}
    ];*/

  return (
    <View style={styles.container}>
           <Text style={[styles.title, {paddingBottom: 20}]}>Lista de Pokemones</Text>
            <FlatList 
                data= {pokemons}
                renderItem={ ({item}) => (
                    <Pressable
                        onPress={() => navigation.navigate('Pokemon', {name: item.name, imageUrl: item.avatar})}
                    >
                        <View style={{alignItems: 'center', margin:5}}>
                            <Image
                                style={styles.imagePokemon}
                                source={{
                                    uri: item.avatar
                                }}
                            />
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                    </Pressable>
                 )
                }
        
            />
           <ButtonComponent 
               label= "Ir a Configuraciones"
               actionButton={() => navigation.navigate('Setting')}
           />
       </View>
  )
}
