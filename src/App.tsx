import { useRef, useState } from "react";
import SolveButton from "./SolveButton";
import Sudoku from "./sudoku/Sudoku";
import { emptyRows } from "./utils/emptyRowGenerator";
import { SudokuGridType } from "./SudokuGridType";


export default function App() {
  const [rows, setRows] = useState(emptyRows);
  const [solutionSteps, setSolutionSteps] = useState([]);
  const [startingPosition, setStartingPosition] = useState(emptyRows);
  const shouldDisplaySolution = useRef(false);

  const setSquareValue = (num: number, row: number, col: number) => {
    const newRows = [...rows];
    newRows[row][col] = num;
    setRows(newRows);
  };

  function updateStartingPosition(startingPosition: SudokuGridType) {
    setStartingPosition(startingPosition);
  }

  function updateRows(rows: SudokuGridType) {
    setRows(rows);
  }

  function clearRows() {
    const newRows = [...rows];

    for (let i = 0; i < newRows.length; i++) {
      for (let j = 0; j < newRows[i].length; j++) {
        newRows[i][j] = null;
      }
    }

    shouldDisplaySolution.current = false;
    setRows(newRows);
    setStartingPosition(newRows);
  }

  function showSolutionSteps() {
    shouldDisplaySolution.current = true;
    setRowsToStartingPosition();
    for (let i = 0; i < solutionSteps.length; i++) {
      // TODO: add ability to break loop on clear button click
      if (!shouldDisplaySolution.current) {
        break;
      }
      console.log(shouldDisplaySolution);
      const step = solutionSteps[i];
      showStepAfterTime(step, 100 * (i + 1));
    }
  }

  function setRowsToStartingPosition() {
    const newRows = [...rows];

    for (let i = 0; i < newRows.length; i++) {
      for (let j = 0; j < newRows[i].length; j++) {
        newRows[i][j] = startingPosition[i][j];
      }
    }

    setRows(newRows);
  }

  function showStepAfterTime(step: number[], time: number) {
    setTimeout(() => {
      const row = step[0];
      const col = step[1];
      const num = step[2];
      setSquareValue(num, row, col);
    }, time);
  }

  return (
    <div>
      <Sudoku 
        setSquareValue={setSquareValue} 
        rows={rows} 
        startingPosition={startingPosition}
      />
      <SolveButton
        sudoku={rows}
        setStartingPosition={updateStartingPosition}
        updateRows={updateRows}
        setSolutionSteps={setSolutionSteps}
      />
      <button onClick={clearRows}>Clear</button>
      <button onClick={showSolutionSteps}>Show Steps</button>
    </div>
  );
}