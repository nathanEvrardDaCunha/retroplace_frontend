interface FormProps {
    children: React.ReactNode;
}

export function Form(props: FormProps) {
    return <form>{props.children}</form>;
}
