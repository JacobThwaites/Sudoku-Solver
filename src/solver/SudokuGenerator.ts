import { SudokuGridType } from "../SudokuGridType";
import { getEmptyRowsWithNulls } from "../utils/emptyRowGenerator";
import shuffle from "../utils/utils";

type Coordinate = [number, number];

export class SudokuGenerator {
  board: SudokuGridType;

  constructor() {
    this.board = getEmptyRowsWithNulls();
  }

  public generateRandomPuzzle(): SudokuGridType | boolean {
    const randomSequence = this.generateRandomSequence();
    let solution = this.solveUsingSequence(randomSequence);

    if (typeof solution === 'boolean') {
        return false;
    }
    
    const puzzle = this.removeNumbers(solution);

    return puzzle;
  }

  private generateRandomSequence(): number[] {
    const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return shuffle(sequence);
  }

  private solveUsingSequence(sequence: number[]): SudokuGridType | boolean {
    const emptySquare: any = this.findEmptySquare();

    if (!emptySquare) {
      return this.board;
    }

    const row = emptySquare[0];
    const col = emptySquare[1];

    for (let i = 0; i < sequence.length; i++) {
      if (this.canAddNum(sequence[i], row, col)) {
        this.board[row][col] = sequence[i];

        if (this.solveUsingSequence(sequence)) {
          return this.board;
        }

        this.board[row][col] = null;
      }

      sequence = this.generateRandomSequence();
    }

    return false;
  }

  private findEmptySquare(): [number, number] | boolean {
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
      !this.isNumInSquare(num, row - (row % 3), col - (col % 3))
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

  private removeNumbers(board: SudokuGridType): SudokuGridType {
    const puzzle = board;
    const TOTAL_NUMS_TO_REMOVE = 60;
    const coordinates = this.getShuffledCoordinates()

    for (let i = 0; i < TOTAL_NUMS_TO_REMOVE; i++) {
        const coordinate = coordinates.pop();
        puzzle[coordinate[0]][coordinate[1]] = null;
    }
    
    return puzzle;
  }

  private getShuffledCoordinates(): Coordinate[] {
    const coordinates = [];

    for (let i = 0; i < this.board.length; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
            const coordinate: Coordinate = [i,j];
            coordinates.push(coordinate);
        }
    }
    
    return shuffle(coordinates);
  }
}
