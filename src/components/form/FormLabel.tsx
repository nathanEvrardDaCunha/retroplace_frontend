import './form-style.scss';

interface FormLabelProps {
    children: string;
    htmlFor: string;
}

export function FormLabel(props: FormLabelProps) {
    return (
        <label className="form__label" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
}
