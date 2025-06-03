
import { View, StyleSheet, Text } from 'react-native'

export const FlexExcercises = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.redBox ]} />
        <View style={[styles.box, styles.greenBox ]} />
        <View style={[styles.box, styles.blueBox ]} />
    </View>
  )
}

/*Ejercicio 1
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6b6b6',
      flexDirection: 'column-reverse',   // column, row, column-reverse, row-reverse
      justifyContent: 'flex-start',  // mismo eje  Y
      alignItems: 'flex-end'   //eje contrario X

    },
    box: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white'
    },
    redBox: {
      backgroundColor: '#ff5151',
    },
    greenBox: {
      backgroundColor: '#51ff8b',
    },
    blueBox: {
      backgroundColor: '#5188ff',
    }
  }) */

    //Ejercicio 2

    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6b6b6',
      flexDirection: 'column',   // column, row, column-reverse, row-reverse
      justifyContent: 'center',  // mismo eje  Y
      alignItems: 'center'   //eje contrario X

    },
    box: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white'
    },
    redBox: {
      backgroundColor: '#ff5151',
    },
    greenBox: {
      backgroundColor: '#51ff8b',
      left: 50
    },
    blueBox: {
      backgroundColor: '#5188ff',
    }
  })