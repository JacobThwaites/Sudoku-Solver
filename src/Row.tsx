import React from "react";
import Square from "./Square";
import './Row.css';

interface RowProps {
  index: number,
  numbers: Array<number>,
  handleChange: Function,
}

function Row(props: RowProps) {
    function handleChange(num: number, column: number) {
        props.handleChange(num, props.index, column);
    }

  return (
    <div className='row'>
      {props.numbers.map((num: number, index: number) => {
        return <Square key={index} index={index} value={num} handleChange={handleChange}/>;
      })}
    </div>
  );
}

export default Row;
