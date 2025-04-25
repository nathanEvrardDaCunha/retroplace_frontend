interface FormOptionProps {
    children: string;
    value: string;
}

export function FormOption(props: FormOptionProps) {
    return <option value={props.value}>{props.children}</option>;
}
