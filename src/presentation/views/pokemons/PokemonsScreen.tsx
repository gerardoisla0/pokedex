import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Image, Pressable } from 'react-native'
import { RootStackParamList } from '../../routes/StackNavigation';
import { ButtonComponent } from '../../components/ButtonComponent';
import { styles } from '../../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import { PokemonUseCaseImpl } from '../../../domain/useCase/implements/pokemonUseCaseImpl';
import { Pokemon } from '../../../domain/entities/pokemon.entity';
import { PokemonCard } from '../../components/PokemonCard';
import { PokeballBackground } from '../../components/PokeballBackground';
import { Text } from 'react-native-paper';

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
    <View style={styles.containerScreen}>
        <PokeballBackground style={styles.imgPositionBackground} />
            <FlatList 
                data= {pokemons}
                keyExtractor={(pokemon,index) => pokemon.id+'-'+index}
                numColumns={2}
                ListHeaderComponent={ () => <Text variant='displayMedium'>Lista de Pokemones</Text>}
                renderItem={ ({item}) => (
                    <PokemonCard pokemon={item}/>
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
