interface FormDescriptionProps {
    children: string;
}

export function FormDescription(props: FormDescriptionProps) {
    return <p>{props.children}</p>;
}
