import renderer from 'react-test-renderer';
import SolveButton from './SolveButton';
import { SudokuGridType } from "./SudokuGridType";


it('renders SolveButton correctly', () => {
    const setStartingPosition = jest.fn();
    const sudoku: SudokuGridType = [];
    const updateRows = jest.fn();
    const setSolutionSteps = jest.fn();
    const setNoSolutionFound = jest.fn();
    const setIsInvalidPuzzle = jest.fn();

    const component = renderer.create(
        <SolveButton
            disabled={false}
            setStartingPosition={setStartingPosition}
            updateRows={updateRows}
            setSolutionSteps={setSolutionSteps}
            setNoSolutionFound={setNoSolutionFound}
            setIsInvalidPuzzle={setIsInvalidPuzzle}
            sudoku={sudoku}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});