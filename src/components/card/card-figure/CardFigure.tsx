interface CardFigureProps {
    children: React.ReactNode;
}

export function CardFigure(props: CardFigureProps) {
    return <figure className="card__figure">{props.children}</figure>;
}
