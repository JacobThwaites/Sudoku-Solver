import { Dispatch, SetStateAction } from "react";
import SolveButton from "../SolveButton";
import { SudokuGridType } from "../SudokuGridType";
import StyledButton from "./StyledButton";
import './SudokuButtons.css';

type Props = {
    isSolveButtonDisabled: boolean,
    rows: SudokuGridType,
    isShowStepsButtonDisabled: boolean,
    updateStartingPosition(startingPosition: SudokuGridType): void,
    onSolveButtonPressed(rows: SudokuGridType): void,
    setSolutionSteps: Dispatch<SetStateAction<any[]>>,
    onClearButtonPressed(): void,
    onSolutionButtonClick(): void,
    setNoSolutionFound: Dispatch<SetStateAction<boolean>>,
    setIsInvalidPuzzle: Dispatch<SetStateAction<boolean>>
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
                setNoSolutionFound={props.setNoSolutionFound}
                setIsInvalidPuzzle={props.setIsInvalidPuzzle}
            />
            <StyledButton id='clear-button' onClick={props.onClearButtonPressed} label='Clear'/>
            <StyledButton disabled={props.isShowStepsButtonDisabled} onClick={props.onSolutionButtonClick} label='Show Steps'/>
        </div>
    );
}