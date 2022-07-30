export const emptyRows: Array<Array<number>> = [];

for (let i = 0; i < 9; i++) {
  const emptyRow = new Array(9).fill(null);
  emptyRows.push(emptyRow);  
};