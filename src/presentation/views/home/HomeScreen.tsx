import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { ButtonComponent } from '../../components/ButtonComponent'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/StackNavigation'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
        <Text style={[styles.title, {paddingBottom: 20}]}>Menú Principal</Text>
        <ButtonComponent 
            label= "Ir a Lista de Pokemones"
            actionButton={() => navigation.navigate('Pokemons')}
        />
        <ButtonComponent 
            label= "Ir a Configuraciones"
            actionButton={() => navigation.navigate('Setting')}
        />
    </View>
  )
}
