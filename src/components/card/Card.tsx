import './card-style.scss';

interface CardProps {
    children: React.ReactNode;
}

export function Card(props: CardProps) {
    return <article className="product">{props.children}</article>;
}
