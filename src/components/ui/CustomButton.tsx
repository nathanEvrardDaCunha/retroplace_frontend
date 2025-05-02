import { Link } from 'react-router-dom';
import './ui-style.scss';

interface BaseButton {
    children: string;
}

interface DefaultButton extends BaseButton {
    variant: 'default' | 'outline' | 'destructive';
    onClick: undefined;
}

interface LinkButton extends BaseButton {
    variant: 'link';
    to: string;
}

type ButtonProps = DefaultButton | LinkButton;

// IDEA: Add style based not only on "variant" but "variant" and "style" like "CustomHeading"
// "variant" is for html logic
// "style" is for css logic

// IDEA: Make each variant optional with ternary
// IDEA: Make to optional with ternary
// IDEA: Make onClick optional with ternary

export function CustomButton(props: ButtonProps) {
    const className = `button--${props.variant}`;

    if (props.variant === 'link') {
        return (
            <Link to={props.to}>
                <button className={className}>{props.children}</button>
            </Link>
        );
    }

    return <button className={className}>{props.children}</button>;
}
