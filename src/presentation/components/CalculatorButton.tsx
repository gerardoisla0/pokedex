import React from 'react'
import { Pressable, Text } from 'react-native'
import { calculatorStyles, colors } from '../theme/appTheme'

interface Props{
    label: string;
    color?: string;
    doubleSize?: boolean;
    actionButton: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    actionButton = () => {}
}: Props) => {
  return (
    <Pressable 
        style={[calculatorStyles.button,
            {
                backgroundColor: color,
                width: doubleSize ? 170 : 80
            }
        ]}
        onPress = { () => actionButton() }
    >
        <Text style={calculatorStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}
