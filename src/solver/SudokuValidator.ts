import { SudokuGridType } from '../SudokuGridType';
import { getEmptyRows } from '../utils/emptyRowGenerator';

export class SudokuValidator {
    public isValidSolution(board: SudokuGridType): boolean {
        if (!this.isValidSudoku(board) || this.areAllNumsSet(board)) {
            return false;
        }

        return true;
    }

    public isValidSudoku(board: SudokuGridType): boolean {
        return (
            this.areRowsValid(board) &&
            this.areColumnsValid(board) && 
            this.areSquaresValid(board)
        );
    }

    private areRowsValid(board: SudokuGridType): boolean {
        for (let i = 0; i < board.length; i++) {
            if (!this.isValidSet(board[i])) {
                return false;
            }
        }

        return true;
    }

    private isValidSet(nums: number[]): boolean {
        nums = nums.filter(Number);
        const uniqueNums: {[num: number]: boolean;} = {}

        for (let i = 0; i < nums.length; i++) {
            if (uniqueNums.hasOwnProperty(nums[i]) || this.isNumOutOfRange(nums[i])) {
                return false;
            }

            uniqueNums[nums[i]] = true;
        }

        return true;
    }

    private isNumOutOfRange(num: number): boolean {
        return num < 1 || num > 9;
    }

    private areColumnsValid(board: SudokuGridType): boolean {
        const columns = this.getColumns(board);

        for (let i = 0; i < columns.length; i++) {
            if (!this.isValidSet(columns[i])) {
                return false;
            }
        }
        
        return true;
    }

    private getColumns(board: SudokuGridType): SudokuGridType {
        const columns = getEmptyRows();
        
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let j = 0; j < row.length; j++) {
                const num = row[j];
                if (num !== null) {
                    columns[j].push(num);
                }
            }
        }

        return columns;
    }

    private areSquaresValid(board: SudokuGridType): boolean {
        const squares = this.getSquares(board);

        for (let i = 0; i < squares.length; i++) {
            if (!this.isValidSet(squares[i])) {
                return false;
            }
        }

        return true;
    }

    private getSquares(board: SudokuGridType): SudokuGridType {
        const squares = getEmptyRows();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const num = board[i][j];

                if (num !== null) {
                    const squareIndex = this.getSquareByCoordinates(i, j);
                    squares[squareIndex].push(num);
                }
            }
        }

        return squares;
    }

    private getSquareByCoordinates(x: number, y: number): number {
        if (x < 3) {
            if (y < 3) {
                return 0;
            }
            else if (y < 6) {
                return 1;
            }
            else {
                return 2;
            }
        } else if (x < 6) {
            if (y < 3) {
                return 3;
            } else if (y < 6) {
                return 4;
            } else {
                return 5;
            }
        }
        else {
            if (y < 3) {
                return 6;
            } else if (y < 6) {
                return 7;
            } else {
                return 8;
            }
        }
    }

    private areAllNumsSet(board: SudokuGridType): boolean {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === null) {
                    return false;
                }
            }
        }

        return true;
    }
}