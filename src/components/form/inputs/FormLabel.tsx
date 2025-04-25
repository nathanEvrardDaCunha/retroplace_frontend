interface FormLabelProps {
    htmlFor: string;
    children: string;
}

export function FormLabel(props: FormLabelProps) {
    return <label htmlFor={props.htmlFor}>{props.children}</label>;
}
