import React, { useRef, useEffect } from 'react';
import { isArrowKeyPress } from '../utils/isArrowKeyPress';
import './Square.css'


interface SquareProps {
  value: number,
  column: number,
  handleChange: Function, 
  handleArrowKey: Function,
  className: string,
  setActiveSquare: any,
  isActiveSquare: boolean
}

export default function Square(props: SquareProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (props.isActiveSquare) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [props.isActiveSquare]);

  function handleInput(event: any) {
    const input = Number(event.target.value);

    if (!input || input > 9) {
      return;
    }

    props.handleChange(input, props.column);
  }

  function handleKeyDown(event: any) {
    if (isArrowKeyPress(event.keyCode)) {
      props.handleArrowKey(event.keyCode);
      return;
    }
  }

  return (
    <>
      <input 
        className={props.className}
        type="text" 
        value={props.value ? props.value : ''}
        maxLength={1} 
        ref={ref}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onClick={props.setActiveSquare}
      />
    </>
  );
}