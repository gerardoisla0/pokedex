/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import { HelloWorld } from './views/HelloWorld';
import { CounterApp } from './presentation/views/CounterApp';
import { Bom } from './presentation/views/BOM';
import { Position } from './presentation/views/Position';
import { Flex } from './presentation/views/Flex';
import { View } from 'react-native';
import { FlexDirection } from './presentation/views/FlexDirection';
import { FlexExcercises } from './presentation/views/FlexExercises';
import { Calculator } from './presentation/views/Calculator';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './presentation/routes/StackNavigation';

function App(): React.JSX.Element {
  
  
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;


    {/*<View style={{flex: 1}}>
       <HelloWorld name="IDAT"/> 
      <CounterApp />
      <Bom  />
      <Position />
      <Flex />
      <FlexDirection />
      <FlexExcercises />
      <Calculator />
    </View>*/}