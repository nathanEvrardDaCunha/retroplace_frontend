import './form-style.scss';

interface FormButtonProps {
    children: React.ReactNode;
}

export function FormButton(props: FormButtonProps) {
    return <button className="form__button">{props.children}</button>;
}
