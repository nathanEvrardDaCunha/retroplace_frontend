interface BaseInput {
    id: string;
    name: string;
    required?: boolean;
    value?: string;
}

interface TextInput extends BaseInput {
    type: 'text';
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    spellcheck?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

interface EmailInput extends BaseInput {
    type: 'email';
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    disabled?: boolean;
    placeholder?: string;
}

interface PasswordInput extends BaseInput {
    type: 'password';
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    disabled?: boolean;
    placeholder?: string;
}

interface DateInput extends BaseInput {
    type: 'date';
    disabled?: boolean;
    max?: string;
    min?: string;
    step?: number;
}

interface CheckboxInput extends BaseInput {
    type: 'checkbox';
    disabled?: boolean;
    checked?: boolean;
}

interface RadioInput extends BaseInput {
    type: 'radio';
    checked?: boolean;
}

// const commonProps = {
//     id: props.id,
//     name: props.name,
//     required: props.required ?? false,
//     disabled: props.disabled ?? false,
//     placeholder: props.placeholder,
//     value: props.value,
// };

// switch (props.type) {
//     case 'text':
//         return <input type="text" {...commonProps} maxLength={props.maxlength ?? 255} minLength={props.minlength ?? 0} pattern={props.pattern ?? ''} spellCheck={props.spellcheck ?? false} />;
//     case 'email':
//         return <input type="email" {...commonProps} maxLength={props.maxlength ?? 255} minLength={props.minlength ?? 0} pattern={props.pattern ?? ''} />;
//     case 'password':
//         return <input type="password" {...commonProps} maxLength={props.maxlength ?? 255} minLength={props.minlength ?? 0} pattern={props.pattern ?? ''} />;
//     case 'date':
//         return <input type="date" {...commonProps} max={props.max ?? '2050-01-01'} min={props.min ?? '1930-01-01'} step={props.step ?? 1} />;
//     case 'checkbox':
//         return <input type="checkbox" {...commonProps} checked={props.checked ?? false} />;
//     case 'radio':
//         return <input type="radio" {...commonProps} checked={props.checked ?? false} />;
//     default:
//         return null;
// }
// }

type CustomInputProps = TextInput | EmailInput | PasswordInput | DateInput | CheckboxInput | RadioInput;

// TODO: Implement Server Side Validation

// TODO: Add style through className

// TODO: Add "inputmode"

export function CustomInput(props: CustomInputProps) {
    if (props.type === 'text') {
        return (
            <input
                type="text"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder === undefined ? 'Default Value' : props.placeholder}
                value={props.value === undefined ? '' : props.value}
                disabled={props.disabled === undefined ? false : props.disabled}
                required={props.required === undefined ? false : props.required}
                maxLength={props.maxlength === undefined ? 255 : props.maxlength}
                minLength={props.minlength === undefined ? 0 : props.minlength}
                pattern={props.pattern === undefined ? '' : props.pattern}
                spellCheck={props.spellcheck === undefined ? false : props.spellcheck}
            />
        );
    }

    if (props.type === 'email') {
        return (
            <input
                type="email"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder === undefined ? 'default.email@gmail.com' : props.placeholder}
                value={props.value === undefined ? '' : props.value}
                disabled={props.disabled === undefined ? false : props.disabled}
                required={props.required === undefined ? false : props.required}
                maxLength={props.maxlength === undefined ? 255 : props.maxlength}
                minLength={props.minlength === undefined ? 0 : props.minlength}
                pattern={props.pattern === undefined ? '' : props.pattern}
            />
        );
    }

    if (props.type === 'password') {
        return (
            <input
                type="password"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder === undefined ? '**************' : props.placeholder}
                value={props.value === undefined ? '' : props.value}
                disabled={props.disabled === undefined ? false : props.disabled}
                required={props.required === undefined ? false : props.required}
                maxLength={props.maxlength === undefined ? 255 : props.maxlength}
                minLength={props.minlength === undefined ? 0 : props.minlength}
                pattern={props.pattern === undefined ? '' : props.pattern}
            />
        );
    }

    if (props.type === 'date') {
        return (
            <input
                type="date"
                id={props.id}
                name={props.name}
                value={props.value === undefined ? '2020-01-01' : props.value}
                disabled={props.disabled === undefined ? false : props.disabled}
                required={props.required === undefined ? false : props.required}
                max={props.max === undefined ? '2050-01-01' : props.max}
                min={props.min === undefined ? '1930-01-01' : props.min}
                step={props.step === undefined ? 1 : props.step}
            />
        );
    }

    if (props.type === 'checkbox') {
        return (
            <input
                type="checkbox"
                id={props.id}
                name={props.name}
                checked={props.checked === undefined ? false : props.checked}
                disabled={props.disabled === undefined ? false : props.disabled}
                required={props.required === undefined ? false : props.required}
            />
        );
    }

    return (
        <input
            type="radio"
            id={props.id}
            name={props.name}
            checked={props.checked === undefined ? false : props.checked}
            required={props.required === undefined ? false : props.required}
        />
    );
}
