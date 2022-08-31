import React, { useRef, useEffect } from 'react';
import { isArrowKeyPress, isBackspacePress, isNumberKeyPress } from '../utils/keypressValidation';
import './Square.css'


interface SquareProps {
  value: number,
  column: number,
  setSquareValue: Function, 
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

  function handleKeyDown(event: any) {
    if (isArrowKeyPress(event.keyCode)) {
      props.handleArrowKey(event.keyCode);
      return;
    }

    if (isBackspacePress(event.keyCode)) {
      props.setSquareValue(null, props.column);
      return;
    }

    if (isNumberKeyPress(event.keyCode)) {
      props.setSquareValue(Number(event.key), props.column);
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
        // onChange handled by onKeydown
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        onClick={props.setActiveSquare}
      />
    </>
  );
}