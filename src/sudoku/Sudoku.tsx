import React, { useState } from "react";
import Row from './Row';
import { SudokuGridType } from "../SudokuGridType";
import { CoordinatesType } from "../utils/CoordinatesType";
import { getNewActiveSquare } from "../utils/getNewActiveSquare";
import './Sudoku.css';


interface SudokuProps {
  rows: SudokuGridType,
  handleChange: Function,
  startingPosition: SudokuGridType
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
            handleChange={props.handleChange}
            handleArrowKey={handleArrowKey}
            rowStartingPosition={props.startingPosition[index]}
            activeSquare={activeSquare}
            setActiveSquare={setActiveSquare}
          />
        )
      })
    }
    </div>
  );
}