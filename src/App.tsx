import React, { useState } from 'react';
import SolveButton from './SolveButton';
import Sudoku from './sudoku/Sudoku';
import { emptyRows } from './utils/generateEmptyRows';

type Rows = Array<Array<number>>;

function App() {
  const [rows, setRows] = useState(emptyRows);
  
  function handleChange(num: number, row: number, col: number) {
    const newRows = [...rows];
    newRows[row][col] = num;
    setRows(newRows);
}

  function updateRows(rows: Rows) {
    setRows(rows)
  }

  function clearRows() {
    const newRows = [...rows];

    for (let i = 0; i < newRows.length; i++) {
      for (let j = 0; j < newRows[i].length; j++) {
        newRows[i][j] = null;
      }
    }

    setRows(newRows);
  }

  return (
    <div>
      <Sudoku handleChange={handleChange} rows={rows}/>
      <SolveButton sudoku={rows} updateRows={updateRows}/>
      <button onClick={clearRows}>Clear</button>
    </div>
  );
}

export default App;
