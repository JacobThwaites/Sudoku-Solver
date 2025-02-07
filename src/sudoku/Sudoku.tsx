import { useState } from "react";
import Row from './Row';
import { SudokuGridType } from "../SudokuGridType";
import { CoordinatesType } from "../utils/CoordinatesType";
import { getNewActiveSquare } from "../utils/getNewActiveSquare";
import './Sudoku.css';

interface SudokuProps {
  rows: SudokuGridType,
  setSquareValue: Function,
  startingPosition: SudokuGridType,
  invalidCoordinates: Set<string>
}

export default function Sudoku(props: SudokuProps) {
  const [activeSquare, setActiveSquare] = useState<CoordinatesType>([-1, -1]);

  function handleArrowKey(keyCode: number) {  
    const newActiveSquare = getNewActiveSquare(activeSquare, keyCode);
    setActiveSquare(newActiveSquare);
  }

  return (
    <div id='sudoku'>
      {props.rows.map((row, index) => {
        return (
          <Row 
            key={index} 
            rowIndex={index} 
            numbers={row} 
            setSquareValue={props.setSquareValue}
            handleArrowKey={handleArrowKey}
            rowStartingPosition={props.startingPosition[index]}
            activeSquare={activeSquare}
            setActiveSquare={setActiveSquare}
            invalidCoordinates={props.invalidCoordinates}
          />
        )
      })
    }
    </div>
  );
}