import React, { useState } from 'react'
import { Button, Pressable, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const CounterApp = () => {

  //const count = 0;

  const [count, setCount] = useState(1);

  const increment = () => {
    return setCount(count + 1);
  }

  const reset = () => {
    return setCount(0);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Mi contador: {count}</Text>
        <View>
            { /* <Button
                onPress={ () => increment()}
                title="Incrementar"
            ></Button> */}
            <Pressable
                onPress={ () => increment()}
                onLongPress={ () => reset()}
                style={styles.button}
            > 
                <Text style={styles.title}>Incrementar</Text>
            </Pressable>
        </View>
    </View>
  )
}
