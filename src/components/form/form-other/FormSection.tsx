interface FormSectionProps {
    children: React.ReactNode;
    variant: 'field' | 'radio' | 'button';
}

// Maybe rename this field because, if not, the "Section" is so vague it could be flex-direction row, column...
export function FormSection(props: FormSectionProps) {
    if (props.variant === 'field') {
        return <section className="form__field">{props.children}</section>;
    }
    if (props.variant === 'radio') {
        return <section className="form__radio--group">{props.children}</section>;
    }
    return <section className="form__buttons">{props.children}</section>;
}
