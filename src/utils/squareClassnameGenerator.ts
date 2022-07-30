export function getSquareClassname(row: number, col: number): string {
    let className = 'square'
    
    if (row === 1) {
        className += ' top-square'
    }
    if (row % 3 === 0) {
        className += ' bottom-square'
    }

    if (col === 1) {
        className += ' left-square';
    }

    if (col % 3 === 0) {
        className += ' right-square'
    }

    return className;
}