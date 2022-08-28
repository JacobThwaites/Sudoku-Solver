import { SudokuGridType } from "../SudokuGridType";

export const emptyRows: SudokuGridType = [];

for (let i = 0; i < 9; i++) {
  const emptyRow = new Array(9).fill(null);
  emptyRows.push(emptyRow);  
};