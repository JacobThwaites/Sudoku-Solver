import Button from "@mui/material/Button";
import "./StyledButton.css";

type Props = {
  id?: string;
  onClick: any;
  label: string;
  disabled?: boolean;
};

export default function StyledButton(props: Props): JSX.Element {
  return (
    <Button
      id={props.id}
      className="styled-button"
      variant="contained"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </Button>
  );
}
