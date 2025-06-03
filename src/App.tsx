/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import { HelloWorld } from './views/HelloWorld';
import { CounterApp } from './views/CounterApp';
import { Bom } from './views/BOM';
import { Position } from './views/Position';
import { Flex } from './views/Flex';
import { View } from 'react-native';
import { FlexDirection } from './views/FlexDirection';
import { FlexExcercises } from './views/FlexExercises';
import { Calculator } from './views/Calculator';

function App(): React.JSX.Element {
  
  
  return (
    <View style={{flex: 1}}>
      { /* <HelloWorld name="IDAT"/> 
      <CounterApp />
      <Bom  />
      <Position />
      <Flex />
      <FlexDirection />
      <FlexExcercises />*/}
      <Calculator />
    </View>
  );
}

export default App;
