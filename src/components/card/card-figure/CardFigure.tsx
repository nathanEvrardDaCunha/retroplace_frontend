interface CardFigureProps {
    children: React.ReactNode;
}

export function CardFigure(props: CardFigureProps) {
    return <figure className="product__figure">{props.children}</figure>;
}
