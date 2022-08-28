import { CoordinatesType } from "./CoordinatesType";
import { ArrowKey } from "./enums";

export function getNewActiveSquare(
  currSquare: CoordinatesType,
  keyCode: number
): CoordinatesType {
  const newSquare: CoordinatesType = [...currSquare];

  switch (keyCode) {
    case ArrowKey.LEFT:
      if (newSquare[1] > 0) {
        newSquare[1]--;
      }
      break;
    case ArrowKey.UP:
      if (newSquare[0] > 0) {
        newSquare[0]--;
      }
      break;

    case ArrowKey.RIGHT:
      if (newSquare[1] < 8) {
        newSquare[1]++;
      }
      break;

    case ArrowKey.DOWN:
      if (newSquare[0] < 8) {
        newSquare[0]++;
      }
      break;
    default:
      break;
  }

  return newSquare;
}
