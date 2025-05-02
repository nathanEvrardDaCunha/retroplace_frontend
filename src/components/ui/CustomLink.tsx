import { Link } from 'react-router-dom';
import './ui-style.scss';

interface CustomLinkProps {
    to: string;
    children: string;
    style: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
}

// IDEA: Make to optional with ternary
// IDEA: Make style optional with ternary

export function CustomLink(props: CustomLinkProps) {
    const className = `link--${props.style}`;

    return (
        <Link className={className} to={props.to}>
            {props.children}
        </Link>
    );
}
