import { useState } from 'react';
import { evaluate } from 'mathjs';

import { Display } from '../Display';

import { Container } from './style';

export function Calculator() {
  const operatorsArray = ['*', '/', '+', '.', '-'];
  const [typedNumber, setTypedNumber] = useState('');

  function handleTypeNumber(value: string) {
    setTypedNumber(typedNumber + value);
  }

  function handleInsertOperator(value: string) {
    if (typedNumber === "" || (operatorsArray.includes(typedNumber[typedNumber.length-1]) && operatorsArray.includes(value))) {
      return;
    } else {
      setTypedNumber(typedNumber + value);
    }
  }

  function handleCalculate() {
    if (typedNumber === "" || operatorsArray.includes(typedNumber[typedNumber.length-1])) {
      return typedNumber;
    } else {
      setTypedNumber(evaluate(typedNumber));
    }
  }

  function handleDeleteDisplayNumber() {
    setTypedNumber('');
  }

  function handleDeleteLastTypedChar() {
    setTypedNumber(typedNumber.slice(0, -1));
  }

  return (
      <Container>
        <div className='main-container'>
          <Display displayValue={typedNumber.toString().substring(0, 22)}/>
          <div className='buttons'>
            <button 
              type='button' 
              className='functional'
              onClick={() => handleDeleteDisplayNumber()}>CE</button>
            <button 
              type='button' 
              className='functional'
              onClick={() => handleDeleteDisplayNumber()}>C</button>
            <button 
              type='button' 
              className='functional'
              onClick={() => handleDeleteLastTypedChar()}>BCKSP</button>
            <button 
              type='button' 
              className='operator'
              onClick={() => handleInsertOperator('/')}>/</button>
            
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('7')}>7</button>
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('8')}>8</button>
            <button 
            type='button' 
            className='num'
            onClick={() => handleTypeNumber('9')}>9</button>
            <button 
              type='button' 
              className='operator'
              onClick={() => handleInsertOperator('*')}>X</button>

            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('4')}>4</button>
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('5')}>5</button>
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('6')}>6</button>
            <button 
              type='button' 
              className='operator'
              onClick={() => handleInsertOperator('-')}>-</button>

            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('1')}>1</button>
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('2')}>2</button>
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('3')}>3</button>
            <button 
              type='button' 
              className='operator'
              onClick={() => handleInsertOperator('+')}>+</button>

            <button 
              type='button' 
              className='assistant'>+/-</button>
            <button 
              type='button' 
              className='num'
              onClick={() => handleTypeNumber('0')}>0</button>
            <button 
              type='button' 
              className='assistant'
              onClick={() => handleInsertOperator('.')}>.</button>
            <button 
              type='button' 
              className='result'
              onClick={() => handleCalculate()}>=</button>
          </div>
        </div>
      </Container>
  )
}
