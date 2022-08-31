export function isArrowKeyPress(inputCode: number): boolean {
    return inputCode >= 37 && inputCode <= 40;
}

export function isBackspacePress(inputCode: number): boolean {
    return inputCode === 8;
}

export function isNumberKeyPress(inputCode: number): boolean {
    return inputCode >= 48 && inputCode <= 57;
}