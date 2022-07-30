import React from 'react';
import Row from './Row';
import './Sudoku.css';

interface SudokuProps {
  rows: Array<Array<number>>
  handleChange: Function
}

function Sudoku(props: SudokuProps) {
  return (
    <div id='sudoku'>
      {props.rows.map((row, index) => {
        return <Row key={index} index={index} numbers={row} handleChange={props.handleChange}/>
      })
    }
    </div>
  );
}

export default Sudoku;
