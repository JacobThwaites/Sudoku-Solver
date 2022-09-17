import { SudokuValidator } from "../solver/SudokuValidator";
import { SudokuGridType } from "../SudokuGridType";
import { CoordinatesType } from "./CoordinatesType";

export function areCoordinatesEqual(square: CoordinatesType, activeSquare: CoordinatesType): boolean {
    return square[0] === activeSquare[0] && square[1] === activeSquare[1];
}

export function isValidSudoku(board: SudokuGridType): boolean {
    const validator = new SudokuValidator();
    return validator.isValidSudoku(board);
  }

export function calculateDelayTime(speed: string): number {
    if (speed === 'Normal') {
        return 100;
    } else if (speed === 'Slow') {
        return 200;
    } else if (speed === 'Fast') {
        return 50;
    } else if (speed === 'Super Slow') {
        return 400;
    } else if (speed === 'Super Fast') {
        return 25;
    }
}