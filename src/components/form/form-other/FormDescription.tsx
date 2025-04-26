interface FormDescriptionProps {
    children: string;
    variant: 'label' | 'description';
}

export function FormDescription(props: FormDescriptionProps) {
    if (props.variant === 'label') {
        return <p className="form__label">{props.children}</p>;
    }

    return <p className="form__description">{props.children}</p>;
}
