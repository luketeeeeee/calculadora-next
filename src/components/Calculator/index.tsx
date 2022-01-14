import { useState } from 'react';
import { Display } from '../Display';

import { Container } from './style';

export function Calculator() {
  const [typedNumber, setTypedNumber] = useState('');

  // let array: Array<string> = [];

  function handleTypeNumber(value: string) {
    setTypedNumber(typedNumber + value);
  }

  function handleDeleteLastTypedNumber() {
    
  }

  return (
      <Container>
        <div className='main-container'>
          <Display displayValue={typedNumber}/>
          <div className='buttons'>
            <button 
              type='button' 
              className='functional'>CE</button>
            <button 
              type='button' 
              className='functional'>C</button>
            <button 
              type='button' 
              className='functional'>BCKSP</button>
            <button 
              type='button' 
              className='operator'>/</button>
            
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
              className='operator'>X</button>

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
              className='operator'>-</button>

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
              className='operator'>+</button>

            <button 
              type='button' 
              className='assistant'>+/-</button>
            <button 
              type='button' 
              className='num'>0</button>
            <button 
              type='button' 
              className='assistant'>,</button>
            <button 
              type='button' 
              className='result'>=</button>
          </div>
        </div>
      </Container>
  )
}
