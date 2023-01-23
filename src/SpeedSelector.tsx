import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import "./TopBar.css";

export default function SpeedSelector(props: { speed: string, setSpeed(speed: string): void }): JSX.Element {
  const handleSpeedChange = (event: SelectChangeEvent) => {
    props.setSpeed(event.target.value as string);
  };

  const speedOptions = ['Super Slow', 'Slow', 'Normal', 'Fast', 'Super Fast'];

  return (
    <FormControl>
      <InputLabel id="speed-select-label">Speed:</InputLabel>
      <Select
        labelId="speed-select-label"
        id="speed-select"
        data-testid="speed-select"
        value={props.speed}
        label="Speed"
        onChange={handleSpeedChange}
      >
        {
          speedOptions.map(option => {
            return <MenuItem key={option} data-testid='speed-option' value={option}>{option}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  );
}
