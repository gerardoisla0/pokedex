import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native';

interface Props{
    style?: StyleProp<ImageStyle>
}

export const PokeballBackground = ({style}:Props) => {

  const pokeballImg = require('../../../assets/pokeball-dark.png');
  return (
    <Image
        source = {pokeballImg}
        style={[{width: 300, height: 300, opacity: 0.3}, style]}
    />
  )
}
