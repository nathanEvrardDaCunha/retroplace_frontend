interface FormSectionProps {
    children: React.ReactNode;
}

// Maybe rename this field because, if not, the "Section" is so vague it could be flex-direction row, column...
export function FormSection(props: FormSectionProps) {
    return <section>{props.children}</section>;
}
