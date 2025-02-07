import { render, fireEvent, screen } from '@testing-library/react';
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
    render(<App />);
    const squares = screen.getAllByTestId('square')
    for (let i = 0; i < squares.length; i++) {
        fireEvent.keyDown(squares[i], { key: '3', keyCode: 51 })
    }

    const solveButton = screen.getByText('Solve');
    fireEvent.click(solveButton);

    const invalidPuzzleAlert = screen.getByText('Invalid puzzle!');
    expect(invalidPuzzleAlert).toBeInTheDocument();
});

it('clears puzzle on clear button press', () => {
    render(<App />);
    const squares = screen.getAllByTestId('square')
    for (let i = 0; i < squares.length; i++) {
        fireEvent.keyDown(squares[i], { key: '3', keyCode: 51 })
    }

    for (let i = 0; i < squares.length; i++) {
        expect(squares[i]).toHaveValue('3')
    }

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    for (let i = 0; i < squares.length; i++) {
        expect(squares[i]).toHaveValue('')
    }
});

it('only enables show steps button if puzzle is solved', () => {
    render(<App />);

    const showStepsButton = screen.getByText('Show Steps');
    expect(showStepsButton).toBeDisabled();

    const solveButton = screen.getByText('Solve');
    fireEvent.click(solveButton);

    expect(showStepsButton).toBeEnabled();
});

it('can generate a random puzzle', () => {
    jest.spyOn(SudokuGenerator.prototype, 'generateRandomPuzzle').mockImplementation(() => false);
    render(<App />);

    const generateButton = screen.getByText('Generate Random Puzzle');
    fireEvent.click(generateButton);

    expect(SudokuGenerator.prototype.generateRandomPuzzle).toHaveBeenCalledTimes(1);
});