import Button from '@mui/material/Button';

type Props = {
    onClick: any,
    label: string,
    disabled?: boolean
}

export default function StyledButton(props: Props): JSX.Element {
    return (
        <Button 
            variant='contained' 
            onClick={props.onClick}
            disabled={props.disabled}    
        >
        {props.label}
        </Button>
    )
}