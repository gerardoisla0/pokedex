import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../theme/appTheme'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../routes/StackNavigation'
import { Pokemon } from '../../domain/entities/pokemon.entity'
import { PokemonUseCaseImpl } from '../../domain/useCase/implements/pokemonUseCaseImpl'

export const PokemonScreen = () => {

  const params = useRoute<RouteProp<RootStackParamList,'Pokemon'>>().params;

    const [pokemon, setPokemon] = useState<Pokemon>();
        
    const {GetPokemonByIdUseCase} = new PokemonUseCaseImpl();

    const loadPokemons = async () => {
        try{
            const pokemonData = await GetPokemonByIdUseCase(params.id);
            setPokemon(pokemonData);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        loadPokemons();
    },[]);
  
      
  return (
     <View style={styles.containerPokemon}>
        <Image 
            source={{
                uri: pokemon?.avatar
                }
            }
            style= {{ width: 200, height: 200}}
        />
        <Text style={styles.title}>{pokemon?.name}</Text>
    </View>
  )
}
