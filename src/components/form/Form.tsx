interface FormProps {
    children: React.ReactNode;
    action: (formData: FormData) => void;
}

export function Form(props: FormProps) {
    return <form action={props.action}>{props.children}</form>;
}
