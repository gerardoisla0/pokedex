import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    name?: string;
}

export const HelloWorld = ({name = 'IDAT'}:Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola Mundo {name}</Text>
    </View>
  )
}
