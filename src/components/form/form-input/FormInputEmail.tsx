interface FormInputEmailProps {
    id: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export function FormInputEmail(props: FormInputEmailProps) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={'email'}
            required={props.required === undefined ? true : props.required}
            disabled={props.disabled === undefined ? false : props.disabled}
            placeholder={props.placeholder === undefined ? 'random.placeholder@gmail.com' : props.placeholder}
            className="form__input--email"
        />
    );
}
