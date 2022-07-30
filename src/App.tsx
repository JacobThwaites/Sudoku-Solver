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

  return (
    <div>
      <Sudoku handleChange={handleChange} rows={rows}/>
      <SolveButton sudoku={rows} updateRows={updateRows}/>
    </div>
  );
}

export default App;
