interface FormInputPasswordProps {
    id: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export function FormInputPassword(props: FormInputPasswordProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'password'}
            required={props.required === undefined ? true : props.required}
            disabled={props.disabled === undefined ? false : props.disabled}
            placeholder={props.placeholder === undefined ? '***********' : props.placeholder}
            className="form__input--password"
        />
    );
}
