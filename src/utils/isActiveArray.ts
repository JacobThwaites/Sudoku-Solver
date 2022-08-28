import { CoordinatesType } from "./CoordinatesType";

export function areCoordinatesEqual(square: CoordinatesType, activeSquare: CoordinatesType): boolean {
    return square[0] === activeSquare[0] && square[1] === activeSquare[1];
}