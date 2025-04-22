interface FormLabelProps {
    children: string;
    htmlFor: string;
}

export function FormLabel(props: FormLabelProps) {
    return <label htmlFor={props.htmlFor}>{props.children}</label>;
}
