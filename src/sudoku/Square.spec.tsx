import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Square from './Square';


it('renders Square correctly', () => {
    const component = renderer.create(
        <Square value={1} column={1} setSquareValue={jest.fn()} handleArrowKey={jest.fn()} className="testClass" setActiveSquare={jest.fn()} isActiveSquare={false} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('handles number input', () => {
    const setSquareValue = jest.fn();
    const key = 3;
    const columnNumber = 2;

    const { getByTestId } = render(
        <Square value={1} column={columnNumber} setSquareValue={setSquareValue} handleArrowKey={jest.fn()} className="testClass" setActiveSquare={jest.fn()} isActiveSquare={false} />
    );

    const square = getByTestId('square');
    fireEvent.keyDown(square, { key: key, keyCode: 51 });
    expect(setSquareValue).toHaveBeenCalledWith(key, columnNumber);
});

it('handles backspace press', () => {
    const setSquareValue = jest.fn();
    const backSpaceCode = 8;
    const columnNumber = 2

    const { getByTestId } = render(
        <Square value={1} column={columnNumber} setSquareValue={setSquareValue} handleArrowKey={jest.fn()} className="testClass" setActiveSquare={jest.fn()} isActiveSquare={false} />
    );

    const square = getByTestId('square');
    fireEvent.keyDown(square, { key: backSpaceCode, keyCode: backSpaceCode });
    expect(setSquareValue).toHaveBeenCalledWith(null, columnNumber);
});

it('handles arrowkey press', () => {
    const handleArrowKey = jest.fn();
    const arrowUpKey = 37;

    const { getByTestId } = render(
        <Square value={1} column={2} setSquareValue={jest.fn()} handleArrowKey={handleArrowKey} className="testClass" setActiveSquare={jest.fn()} isActiveSquare={false} />
    );

    const square = getByTestId('square');
    fireEvent.keyDown(square, { key: arrowUpKey, keyCode: arrowUpKey });
    expect(handleArrowKey).toHaveBeenCalledWith(arrowUpKey);
});