interface FormButtonProps {
    children: React.ReactNode;
}

export function FormButton(props: FormButtonProps) {
    return <button>{props.children}</button>;
}
