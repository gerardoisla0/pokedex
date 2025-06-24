import React from 'react'
import { Pressable, View, Image, StyleSheet } from 'react-native'
import { styles } from '../theme/appTheme';
import { Pokemon } from '../../domain/entities/pokemon.entity'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../routes/StackNavigation';
import { Card, Text } from 'react-native-paper';
import { Position } from '../views/exercices/Position';

interface Props{
    pokemon: Pokemon;
}

export const PokemonCard = ({pokemon}:Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
  return (
     <Pressable
        onPress={() => navigation.navigate('Pokemon', {name: pokemon.name, imageUrl: pokemon.avatar, id: pokemon.id})}
        style={{flex:1}}
    >
        {/*<View style={{alignItems: 'center', margin:5}}>
            <Image
                style={styles.imagePokemon}
                source={{
                    uri: pokemon.avatar
                }}
            />
            <Text style={styles.title}>{pokemon.name}</Text>
        </View>*/}
        <Card style={[stylesCard.cardContainer, {backgroundColor: pokemon.color}]}>
            <Text style={styles.titlePokemon} variant="bodyLarge" lineBreakMode='middle'>
                {pokemon.name}
            </Text>
            <View style={stylesCard.pokeballContainer}>
                <Image
                    style={stylesCard.pokeball}
                    source={require('../../../assets/pokeball-dark.png')}
                />
            </View>
            <View style={{justifyContent: 'center', alignContent: 'center'}}>
                <Image 
                    style ={stylesCard.pokemonImage}
                    source={{ uri: pokemon.avatar}}
                />
            </View>
        </Card>
    </Pressable>
  )
}


const stylesCard = StyleSheet.create({
    cardContainer:{
      marginHorizontal: 10,
      backgroundColor: 'grey',
      height: 120,
      flex: 0.5,
      marginBottom: 25,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    pokeballContainer:{
        alignItems: 'flex-end',
        width: '100%',
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0.5
    },
    pokeball: {
      width: 100,
      height: 100,
      right: -25,
      top: -25,
      opacity: 0.4,
    },
    pokemonImage: {
      width: 120,
      height: 120,
      position: 'absolute',
      right: -15,
      top: -30,
    },
});