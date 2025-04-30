import { Link } from 'react-router-dom';
import './shared-style.scss';

interface CustomLinkProps {
    to: string;
    children: string;
    variant: 'no-padding' | 'top-padding';
}

export function CustomLink(props: CustomLinkProps) {
    if (props.variant === 'top-padding') {
        return (
            <Link className="shared-link--top-padding" to={props.to}>
                {props.children}
            </Link>
        );
    }

    return (
        <Link className="shared-link" to={props.to}>
            {props.children}
        </Link>
    );
}
