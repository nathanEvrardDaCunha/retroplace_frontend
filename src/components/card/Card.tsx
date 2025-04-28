// TODO: Rename "product" to "card" and do the same for all the children.

import './card-style.scss';

interface CardProps {
    children: React.ReactNode;
}

export function Card(props: CardProps) {
    return <article className="card">{props.children}</article>;
}
