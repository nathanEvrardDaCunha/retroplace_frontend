interface CardFigCaptionProps {
    children: string;
}

export function CardFigCaption(props: CardFigCaptionProps) {
    return <figcaption className="card__caption">{props.children}</figcaption>;
}
