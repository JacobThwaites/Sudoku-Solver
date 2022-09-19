import Button from '@mui/material/Button';
import './GenerateRandomPuzzleButton.css'

export default function GenerateRandomPuzzleButton(props: {onGenerateButtonPressed(): void}): JSX.Element {
    return (
        <Button id='generate-puzzle-button' variant="outlined" onClick={props.onGenerateButtonPressed}>Generate Random Puzzle</Button>
    )
}