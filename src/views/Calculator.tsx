import React from 'react'
import { Text, View } from 'react-native'
import { calculatorStyles, colors } from '../config/appTheme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator = () => {

  const { result,
        subResult,
        buildNumber,
        clean,
        toggleSign, 
        deleteOperation, 
        divideOperation, 
        multiplyOperation, 
        substractOperation, 
        addOperation, 
        calculateOperation} = useCalculator();

  return (
    <View style={calculatorStyles.container}>
        <View style={calculatorStyles.containerResult}>
            <Text style={calculatorStyles.textResult}
            adjustsFontSizeToFit
            numberOfLines={1}
            >{result}</Text>
            <Text style={calculatorStyles.subTextResult}
            adjustsFontSizeToFit
            numberOfLines={1}
            >{subResult}</Text>
        </View>
        <View style={calculatorStyles.row}>
            <CalculatorButton label = 'C' actionButton={() => clean()} color={colors.ligthGray}/>
            <CalculatorButton label = '+/-' actionButton={() => toggleSign()} color={colors.ligthGray}/>
            <CalculatorButton label = 'del' actionButton={() => deleteOperation()} color={colors.ligthGray}/>
            <CalculatorButton label = '÷' actionButton={() => divideOperation()} color={colors.orange}/>
        </View> 
        <View style={calculatorStyles.row}>
            <CalculatorButton label = '7' actionButton={() => buildNumber('7')} />
            <CalculatorButton label = '8' actionButton={() => buildNumber('8')} />
            <CalculatorButton label = '9' actionButton={() => buildNumber('9')} />
            <CalculatorButton label = '*' actionButton={() => multiplyOperation()} color={colors.orange}/>
        </View> 
        <View style={calculatorStyles.row}>
            <CalculatorButton label = '4' actionButton={() => buildNumber('4')} />
            <CalculatorButton label = '5' actionButton={() => buildNumber('5')} />
            <CalculatorButton label = '6' actionButton={() => buildNumber('6')} />
            <CalculatorButton label = '-' actionButton={() => substractOperation()} color={colors.orange}/>
        </View> 
        <View style={calculatorStyles.row}>
            <CalculatorButton label = '1' actionButton={() => buildNumber('1')} />
            <CalculatorButton label = '2' actionButton={() => buildNumber('2')} />
            <CalculatorButton label = '3' actionButton={() => buildNumber('3')} />
            <CalculatorButton label = '+' actionButton={() => addOperation()} color={colors.orange}/>
        </View> 
        <View style={calculatorStyles.row}>
            <CalculatorButton label = '0' actionButton={() => buildNumber('0')} doubleSize />
            <CalculatorButton label = '.' actionButton={() => buildNumber('.')} />
            <CalculatorButton label = '=' actionButton={() => calculateOperation()} color={colors.orange}/>
        </View> 
        
    </View>
  )
}
