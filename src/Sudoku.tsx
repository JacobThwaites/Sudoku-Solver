import React from 'react';
import Row from './Row';
import './Sudoku.css';

const emptyRow = new Array(9).fill(null);
const rows = new Array(9).fill(emptyRow);

function Sudoku() {
  return (
    <div id='sudoku'>
      {rows.map((row) => {
        return <Row numbers={row}/>
      })
    }
    </div>
  );
}

export default Sudoku;
