interface BaseInput {
    idName: string;
    placeholder?: string;
    required?: true;
}

interface TextInput extends BaseInput {
    type: 'text';
    inputMode?: 'text';
}

interface EmailInput extends BaseInput {
    type: 'email';
    inputMode?: 'email';
}

interface PasswordInput extends BaseInput {
    type: 'password';
    inputMode?: 'text';
}

export function FormInput(props: TextInput | EmailInput | PasswordInput) {
    return (
        <input
            id={props.idName}
            name={props.idName}
            type={props.type}
            placeholder={props.placeholder}
            inputMode={props.inputMode}
            required={props.required}
        />
    );
}
