import { Link } from 'react-router-dom';

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

export function CustomButton(props: ButtonProps) {
    if (props.variant === 'default') {
        return <button className="button--default">{props.children}</button>;
    }

    if (props.variant === 'outline') {
        return <button className="button--outline">{props.children}</button>;
    }

    if (props.variant === 'destructive') {
        return <button className="button--destructive">{props.children}</button>;
    }

    if (props.variant === 'link') {
        return (
            <Link to={props.to}>
                <button className="button--default">{props.children}</button>
            </Link>
        );
    }

    return <button>PROBLEM WITH THE BUTTON VARIANT</button>;
}
