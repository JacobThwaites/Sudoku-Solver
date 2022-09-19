import { SudokuGridType } from "../SudokuGridType";

export const emptyGrid: SudokuGridType = [];

for (let i = 0; i < 9; i++) {
  const emptyRow = new Array(9).fill(null);
  emptyGrid.push(emptyRow);  
};

export function getEmptyRowsWithNulls(): SudokuGridType {
  const emptyRows = [];

  for (let i = 0; i < 9; i++) {
    const emptyRow = new Array(9).fill(null);
    emptyRows.push(emptyRow);  
  };

  return emptyRows;
}

export function getEmptyRows(): SudokuGridType {
  const emptyRowsWithoutNull = [];

  for (let i = 0; i < 9; i++) {
    emptyRowsWithoutNull.push([]);  
  };

  return emptyRowsWithoutNull;
}