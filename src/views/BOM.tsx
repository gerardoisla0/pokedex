import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../config/appTheme'


export const Bom = () => {
  return (
    <View style={bomStyles.container}>
        <View style={bomStyles.redBox}><Text>IDAT</Text></View>
        <View style={bomStyles.purpleBox}><Text>SOFTWARE</Text></View>
    </View>
  )
}

const bomStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    redBox: {
        width: '50%',
        backgroundColor: 'red',
        paddingBottom: 20,
        paddingTop: 50,
        paddingRight: 30,
        paddingLeft: 10,
        marginVertical: 50,
    },
    purpleBox: {
        backgroundColor: 'purple',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopWidth: 10,
        borderBottomWidth: 20,
        borderLeftWidth: 30,
        borderRightWidth: 40,
        borderColor: 'blue',
    }
});
