import { Link } from 'react-router-dom';

interface CustomLinkProps {
    to: string;
    children: React.ReactNode | string;
}

export function CustomLink(props: CustomLinkProps) {
    return <Link to={props.to}>{props.children}</Link>;
}
