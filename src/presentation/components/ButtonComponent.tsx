import React from 'react'
import { Pressable, Text } from 'react-native'
import { calculatorStyles, colors, styles } from '../theme/appTheme'

interface Props{
    label: string;
    actionButton: () => void;
}

export const ButtonComponent = ({
    label,
    actionButton = () => {}
}: Props) => {
  return (
    <Pressable 
        style={styles.button}
        onPress = { () => actionButton() }
    >
        <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}
