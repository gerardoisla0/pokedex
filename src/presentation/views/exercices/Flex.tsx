import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const Flex = () => {
  return (
    <View style={FlexStyles.container}>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.orangeBox}></View>
    </View>
  )
}

const FlexStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    redBox: {
        backgroundColor: 'red',
        flex: 3,  //16.6% height
    },
    purpleBox: {
        backgroundColor: 'purple',
        flex: 1 //33.3% height
    },
    orangeBox: {
        backgroundColor: 'orange',
        flex: 1 //54.44% height
    }
    // hijos ocupan 1+2+1 = 6 partes 
});
