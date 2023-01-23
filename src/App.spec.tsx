import { render, fireEvent, getByTestId, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { SudokuGenerator } from './solver/SudokuGenerator';


it('renders App correctly', () => {
    const component = renderer.create(
        <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders alert if puzzle is incorrect', () => {
    const { getAllByTestId, getByText } = render(<App />);
    const squares = getAllByTestId('square')
    for (let i = 0; i < squares.length; i++) {
        fireEvent.keyDown(squares[i], { key: '3', keyCode: 51 })
    }

    const solveButton = getByText('Solve');
    fireEvent.click(solveButton);

    const invalidPuzzleAlert = getByText('Invalid puzzle!');
    expect(invalidPuzzleAlert).toBeInTheDocument();
});

it('clears puzzle on clear button press', () => {
    const { getAllByTestId, getByText } = render(<App />);
    const squares = getAllByTestId('square')
    for (let i = 0; i < squares.length; i++) {
        fireEvent.keyDown(squares[i], { key: '3', keyCode: 51 })
    }

    for (let i = 0; i < squares.length; i++) {
        expect(squares[i]).toHaveValue('3')
    }

    const clearButton = getByText('Clear');
    fireEvent.click(clearButton);

    for (let i = 0; i < squares.length; i++) {
        expect(squares[i]).toHaveValue('')
    }
});

it('only enables show steps button if puzzle is solved', () => {
    const { getByText } = render(<App />);

    const showStepsButton = getByText('Show Steps');
    expect(showStepsButton).toBeDisabled();

    const solveButton = getByText('Solve');
    fireEvent.click(solveButton);

    expect(showStepsButton).toBeEnabled();
});

it('can generate a random puzzle', () => {
    jest.spyOn(SudokuGenerator.prototype, 'generateRandomPuzzle').mockImplementation(() => false);
    const { getByText } = render(<App />);

    const generateButton = getByText('Generate Random Puzzle');
    fireEvent.click(generateButton);

    expect(SudokuGenerator.prototype.generateRandomPuzzle).toHaveBeenCalledTimes(1);
});