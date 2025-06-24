import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { styles } from '../../theme/appTheme'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/StackNavigation'
import { Pokemon } from '../../../domain/entities/pokemon.entity'
import { PokemonUseCaseImpl } from '../../../domain/useCase/implements/pokemonUseCaseImpl'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Chip } from 'react-native-paper'

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
  

    const capitalize = (str: string, allWords: boolean = false) => {
      if (allWords) {
        return str.replace(/\b\w/g, (l) => l.toUpperCase());
      } else {
        return str.replace(/\b\w/, (l) => l.toUpperCase());
      }
    }

const pokeballImg = require('../../../../assets/pokeball-light.png');
      
  return (
    <ScrollView
        style={{flex:1, backgroundColor: pokemon?.color}}
        bounces= {false}
        showsVerticalScrollIndicator={false}
    >
        <View style={stylesPokemon.headerContainer}>
            <Text style={stylesPokemon.pokemonName}>
                {capitalize(pokemon?.name || '') + '\n'} #{pokemon?.id}
            </Text>
            <Image source={pokeballImg} style={stylesPokemon.pokeball} />
            <Image 
                source={{
                    uri: pokemon?.avatar
                    }
                }
                style= {stylesPokemon.pokemonImage}
            />
            
        </View>
        <View style= {{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30 }}>
            { pokemon?.types?.map( type => (
                <Chip
                    key= {type}
                    mode= "outlined"
                    style= {{marginLeft: 10}}
                >
                  {capitalize(type)}
                </Chip>
            ))}
        </View>
        <FlatList
            data = {pokemon?.sprites}
            horizontal
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            centerContent
            style={{ marginTop: 20, height: 100 }}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item }}
                    style={{ width: 100, height: 100, marginHorizontal: 5 }}
                />
            )}
        />
        <View style= {{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30 }}>
            { pokemon?.abilities?.map( abilities => (
                <Chip
                    key= {abilities}
                    mode= "outlined"
                    style= {{marginLeft: 10}}
                >
                  {capitalize(abilities)}
                </Chip>
            ))}
        </View>
    </ScrollView>
  )
}

const stylesPokemon = StyleSheet.create({
    headerContainer: {
      height: 370,
      zIndex: 999,
      alignItems: 'center',
      borderBottomRightRadius: 1000,
      borderBottomLeftRadius: 1000,
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    pokemonName: {
      color: 'white',
      fontSize: 40,
      alignSelf: 'flex-start',
      left: 20,
    },
    pokeball: {
      width: 250,
      height: 250,
      bottom: -20,
      opacity: 0.7,
    },
    pokemonImage: {
      width: 240,
      height: 240,
      position: 'absolute',
      bottom: -40,
    },
    loadingIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 20,
      marginTop: 20,
    },
    statsContainer: {
      flexDirection: 'column',
      marginHorizontal: 20,
      alignItems: 'center',
    },
  });