import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import "./TopBar.css";

export default function SpeedSelector(props: { speed: string, setSpeed(speed: string): void }): JSX.Element {
  const handleSpeedChange = (event: SelectChangeEvent) => {
    props.setSpeed(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id="speed-select-label">Speed:</InputLabel>
      <Select
        labelId="speed-select-label"
        id="speed-select"
        value={props.speed}
        label="Speed"
        onChange={handleSpeedChange}
      >
        <MenuItem value={'Super Slow'}>Super Slow</MenuItem>
        <MenuItem value={'Slow'}>Slow</MenuItem>
        <MenuItem value={'Normal'}>Normal</MenuItem>
        <MenuItem value={'Fast'}>Fast</MenuItem>
        <MenuItem value={'Super Fast'}>Super Fast</MenuItem>
      </Select>
    </FormControl>
  );
}
