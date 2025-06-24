import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../../theme/appTheme'


export const Position = () => {
  return (
    <View style={bomStyles.container}>
        <View style={bomStyles.redBox}><Text>IDAT</Text></View>
        <View style={bomStyles.purpleBox}><Text>SOFTWARE</Text></View>
        <View style={bomStyles.orangeBox}><Text>INGENIERÍA</Text></View>
    </View>
  )
}

const bomStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    redBox: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 200,
        height: 200,
    },
    purpleBox: {
        position: 'absolute',
        backgroundColor: 'purple',
        width: 200,
        height: 200,
        top: 200
    },
    orangeBox: {
        position: 'absolute',
        backgroundColor: 'orange',
        width: 200,
        height: 200,
        top: 400,
        left: 200
    }
});
