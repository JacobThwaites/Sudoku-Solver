import StyledButton from "./sudoku/StyledButton";
import { SudokuGridType } from "./SudokuGridType";
import { SudokuSolver } from "./solver/SudokuSolver";


interface SolveButtonProps {
  disabled: boolean,
  sudoku: SudokuGridType;
  setStartingPosition: Function;
  updateRows: Function;
  setSolutionSteps: Function;
}

export default function SolveButton(props: SolveButtonProps) {
  async function fetchSolution() {
    const startingPosition = copySudokuGrid(props.sudoku);
    props.setStartingPosition(startingPosition);

    const solver = new SudokuSolver(props.sudoku);
    const solution = solver.solve();
    props.updateRows(solution);
    props.setSolutionSteps(solver.steps); 
  }

  return <StyledButton disabled={props.disabled} onClick={fetchSolution} label='Solve'/>
}

function copySudokuGrid(sudoku: SudokuGridType): SudokuGridType {
  const copy = [];

    for (let i = 0; i < sudoku.length; i++) {
      copy.push([...sudoku[i]]);
    }

    return copy;
}