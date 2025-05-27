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

function App(): React.JSX.Element {
  
  
  return (
    <>
      { /* <HelloWorld name="IDAT"/> 
      <CounterApp />
      <Bom  />*/}
      <Position />
    </>
  );
}

export default App;
