import { useRef, useState } from 'react'

enum Operation {
    add,
    substract,
    multiply,
    divide
}

export const useCalculator = () => {

    const [result, setResult] = useState('0');
    const [subResult, setSubResult] = useState('0');

    const lastOperation = useRef<Operation>(undefined);

    const buildNumber = (numberString: string) => {

        // no me deje colocar varios puntos decimales
        if(result.includes('.') && numberString === '.') return;

        if(result.startsWith('0') || result.startsWith('-0')) {

            // permitar decimal
            if(numberString === '.'){
                return setResult(result + numberString);
            }
            // permitir ceros consecutivos si es que es decimal
            if(numberString === '0' && !result.includes('.')) return;

            // Reemplazamos 0 innecesarios
            if(numberString !== '0' && !result.includes('.')){
                return setResult(numberString);
            }
        }

        setResult(result + numberString);
    }

    const clean = () => {
        setResult('0');
        setSubResult('0');
    }

    const toggleSign = () => {
        if(result === '0') return;
        if(result.includes('-')){
            return setResult(result.replace('-', ''));
        }
        setResult('-' + result);
    }

    const deleteOperation = () => {
        let currentSign = '';
        let temporalResult = result;  // -909090

        if(temporalResult.includes('-')){
            currentSign = '-';
            temporalResult = result.substring(1); // 909090
        }

        if(temporalResult.length > 1){
            return setResult(currentSign + temporalResult.slice(0, -1)); //-90909
        }

        return setResult('0');
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operation.add;
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operation.divide;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operation.multiply;
    }
    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operation.substract;
    }

    const setLastNumber = () => {
        setSubResult(result);
        setResult('0');
    }

    const calculateOperation = () => {
        let resultCalculate;
        const num2 = Number(result);
        const num1 = Number(subResult);
        switch(lastOperation.current){
            case Operation.add:
                resultCalculate = num1 + num2;
                break;
            case Operation.substract:
                resultCalculate = num1 - num2;
                break;
            case Operation.multiply:
                resultCalculate = num1 * num2;
                break;
            case Operation.divide:
                resultCalculate = num1 / num2;
                break;
            default:
                throw new Error('No existe otra operación');           
        }

        setResult(`${resultCalculate}`);
        setSubResult('0');
        lastOperation.current = undefined;
    }


  return {
        //variables
        result,
        subResult,
        //metodos
        buildNumber,
        clean,
        toggleSign, 
        deleteOperation, 
        divideOperation, 
        multiplyOperation, 
        substractOperation, 
        addOperation, 
        calculateOperation
  }
}
