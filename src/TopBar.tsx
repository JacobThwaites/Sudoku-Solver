import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { ReactComponent as Logo } from "./images/sudoku-logo.svg";
import SpeedSelector from "./SpeedSelector";
import "./TopBar.css";
import "./Logo.css";
import GenerateRandomPuzzleButton from "./GenerateRandomPuzzleButton";

type Props = { 
  speed: string, 
  setSpeed(speed: string): void,
  onGenerateButtonPressed(): void
}

export default function TopBar(props: Props): JSX.Element {
  return (
    <AppBar id="top-bar" position="sticky">
      <Logo id="logo" />
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontSize: "1.75rem" }}
      >
        Sudoku Solver
      </Typography>
      <GenerateRandomPuzzleButton onGenerateButtonPressed={props.onGenerateButtonPressed}/>
      <SpeedSelector speed={props.speed} setSpeed={props.setSpeed}/>
    </AppBar>
  );
}
