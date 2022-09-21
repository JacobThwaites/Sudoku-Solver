import { useRef, useState, useEffect } from "react";
import Sudoku from "./sudoku/Sudoku";
import { emptyGrid } from "./utils/emptyRowGenerator";
import { SudokuGridType } from "./SudokuGridType";
import SudokuButtons from "./sudoku/SudokuButtons";
import Alert from '@mui/material/Alert';
import './App.css';
import TopBar from "./TopBar";
import { calculateDelayTime } from "./utils/utils";
import { SudokuGenerator } from "./solver/SudokuGenerator";

export default function App(): JSX.Element {
  const [rows, setRows] = useState(emptyGrid);
  const [solutionSteps, setSolutionSteps] = useState([]);
  const [startingPosition, setStartingPosition] = useState(emptyGrid);
  const [shouldDisplaySolution, setShouldDisplaySolution] = useState(false);
  const displayingSolution = useRef(false);
  const [isSolveButtonPressed, setIsSolveButtonPressed] = useState(false);
  const [noSolutionFound, setNoSolutionFound] = useState(false);
  const [isInvalidPuzzle, setIsInvalidPuzzle] = useState(false);
  const [speed, setSpeed] = useState('Normal');
  const currentSpeed = useRef('Normal');
  
  // Allows interrupting the for loop for displaying the solution if clear button is pressed.
  useEffect(() => {
    displayingSolution.current = shouldDisplaySolution;
  }, [shouldDisplaySolution]);

  useEffect(() => {
    currentSpeed.current = speed;
  }, [speed]);

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
    setIsInvalidPuzzle(false);
    setRows(rows);
  }

  function onClearButtonPressed(): void {
    clearRows();
    setIsSolveButtonPressed(false);
    setNoSolutionFound(false);
    setIsInvalidPuzzle(false);
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
      const delayTime = calculateDelayTime(currentSpeed.current);
      await delay(delayTime);
      
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

  function generateRandomPuzzle(): void {
    onClearButtonPressed();

    const generator = new SudokuGenerator();
    const puzzle = generator.generateRandomPuzzle();

    if (typeof puzzle !== 'boolean') {
      setPuzzle(puzzle);
    }
  }

  function setPuzzle(puzzle: SudokuGridType): void {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        setSquareValue(puzzle[i][j], i, j); 
      }        
    }
  }

  return (
    <div>
      <TopBar speed={speed} setSpeed={setSpeed} onGenerateButtonPressed={generateRandomPuzzle}/>
      <Sudoku 
        setSquareValue={setSquareValue} 
        rows={rows} 
        startingPosition={startingPosition}
      />
      {isInvalidPuzzle &&
        <Alert className='alert' severity="error">Invalid puzzle!</Alert>
      }
      {noSolutionFound &&
        <Alert severity="error">No valid solution found!</Alert>
      }
      <SudokuButtons 
        isSolveButtonDisabled={isSolveButtonPressed}
        rows={rows}
        updateStartingPosition={updateStartingPosition}
        onSolveButtonPressed={onSolveButtonPressed}
        setSolutionSteps={setSolutionSteps}
        onClearButtonPressed={onClearButtonPressed}
        isShowStepsButtonDisabled={!solutionSteps.length}
        onSolutionButtonClick={showSolutionSteps}
        setNoSolutionFound={setNoSolutionFound}
        setIsInvalidPuzzle={setIsInvalidPuzzle}
      />
    </div>
  );
}