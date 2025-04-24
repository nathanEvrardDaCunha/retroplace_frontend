import './form-style.scss';

interface FormProps {
    children: React.ReactNode;
}

export function Form(props: FormProps) {
    return <form className="form">{props.children}</form>;
}
