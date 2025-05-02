import './form-style.scss';

interface CustomLabelProps {
    children: string;
    htmlFor: string | undefined;
    style: 'default' | 'radio';
}

// IDEA: Make style optional with ternary
// IDEA: Make htmlFor optional with ternary

export function CustomLabel(props: CustomLabelProps) {
    const className = `label--${props.style}`;

    return (
        <label htmlFor={props.htmlFor} className={className}>
            {props.children}
        </label>
    );
}
