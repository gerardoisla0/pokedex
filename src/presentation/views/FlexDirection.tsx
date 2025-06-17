import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const FlexDirection = () => {
  return (
    <View style={FlexStyles.container}>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.orangeBox}></View>
        <View style={FlexStyles.greenBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.greenBox}></View>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.orangeBox}></View>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.orangeBox}></View>
        <View style={FlexStyles.greenBox}></View>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.orangeBox}></View>
        <View style={FlexStyles.greenBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.greenBox}></View>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.orangeBox}></View>
        <View style={FlexStyles.redBox}></View>
        <View style={FlexStyles.purpleBox}></View>
        <View style={FlexStyles.orangeBox}></View>
        <View style={FlexStyles.greenBox}></View>
    </View>
  )
}

const FlexStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        //flexDirection: 'column', // x defecto
        //position: 'relative' // x defecto
        flexDirection: 'column',  //X
        justifyContent: 'flex-start', // x defecto
        //justifyContent: 'center', // espacio entre los hijos  // ALINEA CENTRADO EN EJE X
        alignItems : 'flex-start',
        //alignItems : 'center' // ALINEA CENTRADO EN EJE Y,
        flexWrap: 'wrap',
        gap: 10 // los hijos se colocan de derecha a izquierda
    },
    redBox: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        //alignSelf: 'flex-start'
    },
    purpleBox: {
        backgroundColor: 'purple',
        height: 100,
        width: 100,
        //alignSelf: 'center' // ocupa todo el espacio disponible
    },
    orangeBox: {
        backgroundColor: 'orange',
        height: 100,
        width: 100,
    },
    greenBox: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        //alignSelf: 'flex-end'
    }
    // hijos ocupan 1+2+1 = 6 partes 
});
