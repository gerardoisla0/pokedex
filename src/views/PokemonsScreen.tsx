import { useNavigation, NavigationProp } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { RootStackParamList } from '../routes/StackNavigation';
import { ButtonComponent } from '../components/ButtonComponent';
import { styles } from '../config/appTheme';
import { FlatList } from 'react-native-gesture-handler';

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

interface Pokemon{
    id: string,
    name: string,
    imageUrl: string,
}

export const PokemonsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
     const pokemons = [
        {id: "1" , name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
        {id: "2" , name: 'Ivysaur' , imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
        {id: "3" , name: 'Venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'},
        {id: "4" , name: 'Charmander', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
        {id: "5" , name: 'Charmeleon', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'},
        {id: "6" , name: 'Charizard', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'}
    ];

  return (
    <View style={styles.container}>
           <Text style={[styles.title, {paddingBottom: 20}]}>Lista de Pokemones</Text>
            <FlatList 
                data= {pokemons}
                renderItem={ ({item}) => (
                    <Pressable
                        onPress={() => navigation.navigate('Pokemon', {id: item.id, name: item.name, imageUrl: item.imageUrl})}
                    >
                        <View style={{alignItems: 'center', margin:5}}>
                            <Image
                                style={styles.imagePokemon}
                                source={{
                                    uri: item.imageUrl
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
