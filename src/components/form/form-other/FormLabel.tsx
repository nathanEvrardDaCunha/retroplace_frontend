interface FormLabelProps {
    htmlFor: string;
    children: string;
    variant: 'label' | 'radio';
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
        <label className="form__radio--label" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
}
