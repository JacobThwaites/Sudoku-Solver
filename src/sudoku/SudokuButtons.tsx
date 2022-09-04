import { Dispatch, SetStateAction } from "react";
import SolveButton from "../SolveButton";
import { SudokuGridType } from "../SudokuGridType";
import StyledButton from "./StyledButton";
import './SudokuButtons.css';

type Props = {
    isSolveButtonDisabled: boolean,
    rows: SudokuGridType,
    updateStartingPosition(startingPosition: SudokuGridType): void,
    onSolveButtonPressed(rows: SudokuGridType): void,
    setSolutionSteps: Dispatch<SetStateAction<any[]>>,
    onClearButtonPressed(): void,
    isShowStepsButtonDisabled: boolean,
    onSolutionButtonClick(): void
}

export default function SudokuButtons(props: Props): JSX.Element {
    return (
        <div id='sudoku-buttons'>
            <SolveButton
                disabled={props.isSolveButtonDisabled}
                sudoku={props.rows}
                setStartingPosition={props.updateStartingPosition}
                updateRows={props.onSolveButtonPressed}
                setSolutionSteps={props.setSolutionSteps}
            />
            <StyledButton onClick={props.onClearButtonPressed} label='Clear'/>
            <StyledButton disabled={props.isShowStepsButtonDisabled} onClick={props.onSolutionButtonClick} label='Show Steps'/>
        </div>
    );
}