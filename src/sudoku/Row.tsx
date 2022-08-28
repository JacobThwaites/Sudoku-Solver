import React from "react";
import Square from "./Square";
import './Row.css';
import { getSquareClassname } from "../utils/squareClassnameGenerator";
import { SudokuGridType } from "../SudokuGridType";

interface RowProps {
  rowIndex: number,
  numbers: Array<number>,
  handleChange: Function,
  startingPosition: SudokuGridType
}

export default function Row(props: RowProps) {
    function handleChange(num: number, column: number) {
        props.handleChange(num, props.rowIndex, column);
    }

  return (
    <div className='row'>
      {props.numbers.map((num: number, column: number) => {
        const isSet = props.startingPosition[props.rowIndex][column] !== null;
        return (
          <Square 
            className={getSquareClassname(props.rowIndex + 1, column + 1, isSet)} 
            key={column} 
            column={column} 
            value={num} 
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}