interface FormTextAreaProps {
    id: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export function FormTextArea(props: FormTextAreaProps) {
    return (
        <textarea
            id={props.id}
            name={props.name}
            required={props.required === undefined ? true : props.required}
            disabled={props.disabled === undefined ? false : props.disabled}
            placeholder={props.placeholder === undefined ? 'Random TextArea Placeholder.' : props.placeholder}
            rows={5}
            cols={30}
        ></textarea>
    );
}
