import React, { useState } from 'react';
import Row from './Row';
import { emptyRows } from './utils/generateEmptyRows';
import './Sudoku.css';

function Sudoku() {
  const [rows, setRows] = useState(emptyRows);

  function handleChange(num: number, row: number, col: number) {
    const newRows = [...rows];
    newRows[row][col] = num;
    setRows(newRows);
}

  return (
    <div id='sudoku'>
      {rows.map((row, index) => {
        return <Row key={index} index={index} numbers={row} handleChange={handleChange}/>
      })
    }
    </div>
  );
}

export default Sudoku;
