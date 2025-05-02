import './form-style.scss';

interface CustomFormProps {
    children: React.ReactNode;
    action: (formData: FormData) => void;
}

// TODO: When form is a success, allow the possibility to be redirect to a new page.
// TODO: When form is a failure, allow the user to retry the form without losing data.

// TODO: When form is a success, tell it to the user through a message.
// TODO: When form is a failure, tell it to the user through a message.

// IDEA: Make action optional with ternary

export function CustomForm(props: CustomFormProps) {
    return (
        <form action={props.action} className="form">
            {props.children}
        </form>
    );
}
