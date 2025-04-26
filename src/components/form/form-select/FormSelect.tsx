interface FormSelectProps {
    children: React.ReactNode;
    id: string;
    name: string;
    required?: boolean;
}

export function FormSelect(props: FormSelectProps) {
    return (
        <select id={props.id} name={props.name} required={props.required === undefined ? true : props.required}>
            {props.children}
        </select>
    );
}
