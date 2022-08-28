import React from 'react';
import Row from './Row';
import './Sudoku.css';
import { SudokuGridType } from "../SudokuGridType";

interface SudokuProps {
  rows: SudokuGridType,
  handleChange: Function,
  startingPosition: SudokuGridType
}

export default function Sudoku(props: SudokuProps) {
  return (
    <div id='sudoku'>
      {props.rows.map((row, index) => {
        return (
          <Row 
            key={index} 
            rowIndex={index} 
            numbers={row} 
            handleChange={props.handleChange}
            startingPosition={props.startingPosition}
          />
        )
      })
    }
    </div>
  );
}