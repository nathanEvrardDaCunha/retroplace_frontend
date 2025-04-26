interface FormLabelProps {
    htmlFor: string;
    children: string;
    variant: 'label' | 'input';
}

export function FormLabel(props: FormLabelProps) {
    if (props.variant === 'label') {
        return (
            <label className="form__label" htmlFor={props.htmlFor}>
                {props.children}
            </label>
        );
    }

    return (
        <label className="form__input" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
}
