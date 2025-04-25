interface FormInputCheckBoxProps {
    id: string;
    name: string;
    value: string;
    disabled?: boolean;
}

export function FormInputCheckBox(props: FormInputCheckBoxProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'checkbox'}
            disabled={props.disabled === undefined ? false : props.disabled}
            value={props.value}
        />
    );
}
