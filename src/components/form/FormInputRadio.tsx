interface FormInputRadioProps {
    id: string;
    name: string;
    disabled?: boolean;
    value: string;
}

export function FormInputRadio(props: FormInputRadioProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'radio'}
            disabled={props.disabled === undefined ? false : props.disabled}
            value={props.value}
        />
    );
}
