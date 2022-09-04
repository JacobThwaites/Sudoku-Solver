import { SudokuGridType } from '../SudokuGridType';

type Steps = Step[];
type Step = [number, number, number|null]

export class SudokuSolver {
  board: SudokuGridType;
  steps: Steps;

  constructor(board: SudokuGridType) {
    this.board = board;
    this.steps = [];
  }

  public solve(): SudokuGridType | boolean {
    const emptySquare: any = this.findEmptySquare();

    if (!emptySquare) {
        return this.board;
    }

    const row = emptySquare[0];
    const col = emptySquare[1];

    for (let i = 1; i <= 9; i++) {
        if (this.canAddNum(i, row, col)) {
            this.board[row][col] = i;
            this.steps.push([row, col, i]);

            if (this.solve()) {
                return this.board;
            }

            this.board[row][col] = null;
            this.steps.push([row, col, null]);
        }     
    }

    return false;
  }

  private findEmptySquare(): [number, number] |  boolean {
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === null) {
          return [i, j];
        }
      }
    }
    return false;
  }

  private canAddNum(num: number, row: number, col: number): boolean {
    return (
        !this.isNumInRow(num, row) &&
        !this.isNumInCol(num, col) && 
        !this.isNumInSquare(num, row - row % 3, col - col % 3)
    );
  }

  private isNumInRow(num: number, row: number): boolean {
    for (let i = 0; i < 9; i++) {
        if (this.board[row][i] === num) {
            return true;
        }    
    }
    
    return false;
  }

  private isNumInCol(num: number, col: number): boolean {
    for (let i = 0; i < 9; i++) {
        if (this.board[i][col] === num) {
            return true;
        }    
    }
    
    return false;
  }

  private isNumInSquare(num: number, row: number, col: number): boolean {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (this.board[i + row][j + col] === num) {
                return true;
            }
        }
    }

    return false;
  }
}
