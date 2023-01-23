import Square from "./Square";
import { getSquareClassname } from "../utils/squareClassnameGenerator";
import { CoordinatesType } from "../utils/CoordinatesType";
import { areCoordinatesEqual } from "../utils/utils";
import './Row.css';


interface RowProps {
  rowIndex: number,
  numbers: Array<number>,
  setSquareValue: Function,
  handleArrowKey: Function,
  rowStartingPosition: Array<number>,
  activeSquare: CoordinatesType,
  setActiveSquare: Function
}

export default function Row(props: RowProps) {
    function setSquareValue(num: number, column: number) {
        props.setSquareValue(num, props.rowIndex, column);
    }

    function setActiveSquare(column: number) {
      const newActiveSquare: CoordinatesType = [props.rowIndex, column];
      props.setActiveSquare(newActiveSquare);
    }

  return (
    <div className='row'>
      {props.numbers.map((num: number, column: number) => {
        const isSet = props.rowStartingPosition[column] !== null;
        const isActiveSquare = areCoordinatesEqual([props.rowIndex, column], props.activeSquare);
        return (
          <Square 
            className={getSquareClassname(props.rowIndex + 1, column + 1, isSet)} 
            isActiveSquare={isActiveSquare}
            key={column} 
            column={column} 
            value={num} 
            setSquareValue={setSquareValue}
            handleArrowKey={props.handleArrowKey}
            setActiveSquare={() => setActiveSquare(column)}
          />
        );
      })}
    </div>
  );
}