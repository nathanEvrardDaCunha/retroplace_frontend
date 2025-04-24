import './form-style.scss';

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

// min; max; value
interface DateInput extends BaseInput {
    type: 'date';
    inputMode?: 'text';
}

// interface FormInputDateProps {
//     id: string;
//     name: string;
//     required?: boolean;
//     disabled?: boolean;
// }

// export function FormInputDate(props: FormInputDateProps) {
//     return (
//         <input
//             id={props.id}
//             name={props.name}
//             type={'date'}
//             required={props.required === undefined ? true : props.required}
//             disabled={props.disabled === undefined ? false : props.disabled}
//         />
//     );
// }

// interface FormInputRadioProps {
//     id: string;
//     name: string;
//     disabled?: boolean;
//     value: string;
// }

// export function FormInputRadio(props: FormInputRadioProps) {
//     return (
//         <input
//             id={props.id}
//             name={props.name}
//             type={'radio'}
//             disabled={props.disabled === undefined ? false : props.disabled}
//             value={props.value}
//         />
//     );
// }

// interface FormInputTextProps {
//     id: string;
//     name: string;
//     required?: boolean;
//     disabled?: boolean;
//     placeholder?: string;
// }

// export function FormInputText(props: FormInputTextProps) {
//     return (
//         <input
//             id={props.id}
//             name={props.name}
//             type={'text'}
//             required={props.required === undefined ? true : props.required}
//             disabled={props.disabled === undefined ? false : props.disabled}
//             placeholder={props.placeholder}
//         />
//     );
// }

// interface FormTextAreaProps {
//     id: string;
//     name: string;
//     required?: boolean;
//     disabled?: boolean;
//     placeholder?: string;
// }

// export function FormTextArea(props: FormTextAreaProps) {
//     return (
//         <textarea
//             id={props.id}
//             name={props.name}
//             required={props.required === undefined ? true : props.required}
//             disabled={props.disabled === undefined ? false : props.disabled}
//             placeholder={props.placeholder}
//             rows={5}
//             cols={30}
//         ></textarea>
//     );
// }

// interface FormInputCheckBoxProps {
//     id: string;
//     name: string;
//     value: string;
//     disabled?: boolean;
// }

// export function FormInputCheckBox(props: FormInputCheckBoxProps) {
//     return (
//         <input
//             id={props.id}
//             name={props.name}
//             type={'checkbox'}
//             disabled={props.disabled === undefined ? false : props.disabled}
//             value={props.value}
//         />
//     );
// }

// Need some rework because placeholder is not on input="date"
export function FormInput(props: TextInput | EmailInput | PasswordInput | DateInput) {
    return (
        <input
            className="form__input"
            id={props.idName}
            name={props.idName}
            type={props.type}
            placeholder={props.placeholder}
            inputMode={props.inputMode}
            required={props.required}
        />
    );
}
