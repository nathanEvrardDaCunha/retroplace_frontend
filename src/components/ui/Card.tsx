import './ui-style.scss';

interface CardProps {
    children: React.ReactNode;
}

// Outline Card

export function Card(props: CardProps) {
    return <article className="card">{props.children}</article>;
}
