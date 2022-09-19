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

export default function shuffle(array: Array<any>) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }