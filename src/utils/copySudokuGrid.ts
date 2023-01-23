import { SudokuGridType } from "../SudokuGridType";

export function copySudokuGrid(sudoku: SudokuGridType): SudokuGridType {
    const copy = [];
  
    for (let i = 0; i < sudoku.length; i++) {
      copy.push([...sudoku[i]]);
    }
  
    return copy;
  }