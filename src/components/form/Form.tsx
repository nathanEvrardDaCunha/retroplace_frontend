// './form-style.scss';
import './form-style.scss';

interface FormProps {
    children: React.ReactNode;
    action: (formData: FormData) => void;
}

// TODO: If possible, style the interactive state of each element (e.g: hover of input...) to use
// the same global color dedicated for interactive UI.
export function Form(props: FormProps) {
    return (
        <form className="form" action={props.action}>
            {props.children}
        </form>
    );
}
