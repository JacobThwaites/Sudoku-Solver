import React from "react";
import Square from "./Square";
import './Row.css';
import { getSquareClassname } from "../utils/squareClassnameGenerator";

interface RowProps {
  rowIndex: number,
  numbers: Array<number>,
  handleChange: Function,
}

function Row(props: RowProps) {
    function handleChange(num: number, column: number) {
        props.handleChange(num, props.rowIndex, column);
    }


  return (
    <div className='row'>
      {props.numbers.map((num: number, index: number) => {
        return (
          <Square 
            className={getSquareClassname(props.rowIndex + 1, index + 1)} 
            key={index} 
            column={index} 
            value={num} 
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}

export default Row;
