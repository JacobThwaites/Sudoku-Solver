import React from "react";
import Square from "./Square";
import { getSquareClassname } from "../utils/squareClassnameGenerator";
import { CoordinatesType } from "../utils/CoordinatesType";
import './Row.css';
import { areCoordinatesEqual } from "../utils/isActiveArray";


interface RowProps {
  rowIndex: number,
  numbers: Array<number>,
  handleChange: Function,
  handleArrowKey: Function,
  rowStartingPosition: Array<number>,
  activeSquare: CoordinatesType,
  setActiveSquare: Function
}

export default function Row(props: RowProps) {
    function handleChange(num: number, column: number) {
        props.handleChange(num, props.rowIndex, column);
    }

    function setActiveSquare(column: number) {
      const newActiveSquare: CoordinatesType = [props.rowIndex, column];
      props.setActiveSquare(newActiveSquare);
    }

  return (
    <div className='row'>
      {props.numbers.map((num: number, column: number) => {
        const isSet = props.rowStartingPosition[column] !== null;
        const isActiveSquare = areCoordinatesEqual([props.rowIndex, column], props.activeSquare);
        return (
          <Square 
            className={getSquareClassname(props.rowIndex + 1, column + 1, isSet, isActiveSquare)} 
            isActiveSquare={isActiveSquare}
            key={column} 
            column={column} 
            value={num} 
            handleChange={handleChange}
            handleArrowKey={props.handleArrowKey}
            setActiveSquare={() => setActiveSquare(column)}
          />
        );
      })}
    </div>
  );
}