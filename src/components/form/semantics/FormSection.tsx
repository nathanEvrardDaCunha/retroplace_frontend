interface FormSectionProps {
    children: React.ReactNode;
}

export function FormSection(props: FormSectionProps) {
    return <section>{props.children}</section>;
}
