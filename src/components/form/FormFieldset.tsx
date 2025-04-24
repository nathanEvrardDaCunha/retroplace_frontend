import './form-style.scss';

interface FormFieldsetProps {
    children: React.ReactNode;
}

export function FormFieldset(props: FormFieldsetProps) {
    return <fieldset className="form__fieldset">{props.children}</fieldset>;
}
