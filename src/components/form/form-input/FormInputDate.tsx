interface FormInputDateProps {
    id: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
}

export function FormInputDate(props: FormInputDateProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'date'}
            required={props.required === undefined ? true : props.required}
            disabled={props.disabled === undefined ? false : props.disabled}
        />
    );
}
