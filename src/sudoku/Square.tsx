import React from 'react';
import './Square.css'

interface SquareProps {
  value: number,
  column: number,
  handleChange: Function, 
  className: string
}

export default function Square(props: SquareProps) {
  function handleInput(event: any) {
    const input = Number(event.target.value);

    if (!input || input > 9) {
      return;
    }

    props.handleChange(input, props.column);
  }

  return (
    <>
      <input 
        className={props.className}
        type="text" 
        value={props.value ? props.value : ''}
        maxLength={1} 
        onChange={handleInput}
      />
    </>
  );
}