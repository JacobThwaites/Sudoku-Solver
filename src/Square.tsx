import React from 'react';
import './Square.css'

interface SquareProps {
  value: number,
  index: number,
  handleChange: Function, 
}

function Square(props: SquareProps) {
  function handleInput(event: any) {
    const input = Number(event.target.value);

    if (!input || input > 9) {
      return;
    }

    props.handleChange(input, props.index);
  }

  return (
    <>
      <input 
        className='square'
        type="text" 
        value={props.value}
        maxLength={1} 
        onChange={handleInput}
      />
    </>
  );
}

export default Square;
