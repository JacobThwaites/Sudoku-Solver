export function getSquareClassname(row: number, col: number, isNumberSet: boolean, isInvalid: boolean): string {
    let className = 'square';
    
    if (row === 1) {
        className += ' top-square';
    }
    if (row % 3 === 0) {
        className += ' bottom-square';
    }

    if (col === 1) {
        className += ' left-square';
    }

    if (col % 3 === 0) {
        className += ' right-square';
    }

    if (isNumberSet) {
        className += ' starting-position';
    }

    if (isInvalid) {
        className += ' invalid';
    }

    return className;
}