import { Dispatch, SetStateAction } from "react";
import StyledButton from "./sudoku/StyledButton";
import { SudokuGridType } from "./SudokuGridType";
import { SudokuSolver } from "./solver/SudokuSolver";
import { isValidSudoku } from "./utils/utils";
import { copySudokuGrid } from "./utils/copySudokuGrid";

interface SolveButtonProps {
  disabled: boolean;
  sudoku: SudokuGridType;
  setStartingPosition: Function;
  updateRows: Function;
  setSolutionSteps: Function;
  setNoSolutionFound: Dispatch<SetStateAction<boolean>>;
  setIsInvalidPuzzle: Dispatch<SetStateAction<boolean>>;
}

export default function SolveButton(props: SolveButtonProps) {
  async function fetchSolution() {
    const startingPosition = copySudokuGrid(props.sudoku);
    props.setStartingPosition(startingPosition);

    if (!isValidSudoku(props.sudoku)) {
      props.setIsInvalidPuzzle(true);
      return;
    }

    const solver = new SudokuSolver(props.sudoku);
    const solution = solver.solve();

    if (!solution) {
      props.setNoSolutionFound(true);
    } else {
      props.updateRows(solution);
      props.setSolutionSteps(solver.steps);
    }
  }

  return (
    <StyledButton
      disabled={props.disabled}
      onClick={fetchSolution}
      label="Solve"
    />
  );
}