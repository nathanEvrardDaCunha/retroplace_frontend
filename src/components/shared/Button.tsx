import './shared-style.scss';

interface ButtonProps {
    children: React.ReactNode;
}

export function Button(props: ButtonProps) {
    return <button className="shared-button">{props.children}</button>;
}
