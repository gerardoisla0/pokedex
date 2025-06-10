import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../config/appTheme'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../routes/StackNavigation'

export const PokemonScreen = () => {

  const params = useRoute<RouteProp<RootStackParamList,'Pokemon'>>().params;

  return (
     <View style={styles.containerPokemon}>
        <Image 
            source={{
                uri: params.imageUrl
                }
            }
            style= {{ width: 200, height: 200}}
        />
        <Text style={styles.title}>{params.id} - {params.name}</Text>
    </View>
  )
}
