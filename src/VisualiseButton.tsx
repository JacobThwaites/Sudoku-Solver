import React from 'react';
import { SudokuGridType } from "./SudokuGridType";

interface VisualiseButtonProps {
    sudoku: SudokuGridType,
    updateRows: Function,
}

export default function VisualiseButton(props: VisualiseButtonProps) {
    async function fetchSolution() {
        const headers = new Headers();
        headers.append('X-CSRFToken', 'mFt9iI8ePmrSPrVMRYTziISABwVIc6W6voUMHobLGr6oV8Wg9HirsTXO04TFi57w');
        const res = await fetch('http://localhost:8000/solve/', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({'sudoku': props.sudoku}),            
        });
        
        const data = await res.json(); 
        props.updateRows(data.solution);
    }

  return (
    <button onClick={fetchSolution}>Solve</button>
  );
}