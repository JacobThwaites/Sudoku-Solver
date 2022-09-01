import { useRef, useState, useEffect } from "react";
import SolveButton from "./SolveButton";
import Sudoku from "./sudoku/Sudoku";
import { emptyRows } from "./utils/emptyRowGenerator";
import { SudokuGridType } from "./SudokuGridType";


export default function App(): JSX.Element {
  const [rows, setRows] = useState(emptyRows);
  const [solutionSteps, setSolutionSteps] = useState([]);
  const [startingPosition, setStartingPosition] = useState(emptyRows);
  const [shouldDisplaySolution, setShouldDisplaySolution] = useState(false);
  const displayingSolution = useRef(false);
  const [isSolveButtonPressed, setIsSolveButtonPressed] = useState(false);
  
  useEffect(() => {
    displayingSolution.current = shouldDisplaySolution;
  }, [shouldDisplaySolution]);

  function setSquareValue(num: number, row: number, col: number): void {
    const newRows = [...rows];
    newRows[row][col] = num;
    setRows(newRows);
  };

  function updateStartingPosition(startingPosition: SudokuGridType): void {
    setStartingPosition(startingPosition);
  }

  function onSolveButtonPressed(rows: SudokuGridType): void {
    setIsSolveButtonPressed(true);
    setRows(rows);
  }

  function onClearButtonPressed(): void {
    clearRows();
    setIsSolveButtonPressed(false);
  }

  function clearRows(): void {
    const newRows = [...rows];

    for (let i = 0; i < newRows.length; i++) {
      for (let j = 0; j < newRows[i].length; j++) {
        newRows[i][j] = null;
      }
    }

    setShouldDisplaySolution(false);
    setRows(newRows);
    setStartingPosition(newRows);
    setSolutionSteps([]);
  }

  async function showSolutionSteps() {
    setShouldDisplaySolution(true);
    setRowsToStartingPosition();

    for (let i = 0; i < solutionSteps.length; i++) {
      await delay(100);
      
      if (!displayingSolution.current) {
        break;
      }

      const step = solutionSteps[i];
      addStepToGrid(step);
    }
  }

  function setRowsToStartingPosition(): void {
    const newRows = [...rows];

    for (let i = 0; i < newRows.length; i++) {
      for (let j = 0; j < newRows[i].length; j++) {
        newRows[i][j] = startingPosition[i][j];
      }
    }

    setRows(newRows);
  }

  function delay(ms: number): Promise<number> {
    return new Promise(res => setTimeout(res, ms));
  } 

  function addStepToGrid(step: number[]): void {
    const row = step[0];
    const col = step[1];
    const num = step[2];
    setSquareValue(num, row, col);
  }

  return (
    <div>
      <Sudoku 
        setSquareValue={setSquareValue} 
        rows={rows} 
        startingPosition={startingPosition}
      />
      <SolveButton
        disabled={isSolveButtonPressed}
        sudoku={rows}
        setStartingPosition={updateStartingPosition}
        updateRows={onSolveButtonPressed}
        setSolutionSteps={setSolutionSteps}
      />
      <button onClick={onClearButtonPressed}>Clear</button>
      <button disabled={!solutionSteps.length} onClick={showSolutionSteps}>Show Steps</button>
    </div>
  );
}