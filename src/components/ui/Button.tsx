import { Link } from 'react-router-dom';
import './ui-style.scss';

interface BaseButton {
    children: string;
    disabled?: boolean;
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

// IDEA: For disabled button, mark down inside them (instead of their child) "Disabled"

export function Button(props: ButtonProps) {
    const buttonDisabled =
        props.disabled === undefined ? false : props.disabled;

    const className = `button--${props.variant}`;

    if (props.variant === 'link') {
        return (
            <Link to={props.to}>
                <button className={className} disabled={buttonDisabled}>
                    {props.children}
                </button>
            </Link>
        );
    }

    return (
        <button className={className} disabled={buttonDisabled}>
            {props.children}
        </button>
    );
}
