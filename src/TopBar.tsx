import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from './images/sudoku-logo.svg';
import './TopBar.css';
import './Logo.css'

export default function TopBar(): JSX.Element {
    return (
        <AppBar id='top-bar' position="sticky">
            <Logo id='logo' />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '1.75rem' }}>
                Sudoku Solver
            </Typography>
        </AppBar>
    )
}