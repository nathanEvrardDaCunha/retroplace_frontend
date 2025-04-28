interface CardImageProps {
    src: string;
    alt: string;
}

export function CardImage(props: CardImageProps) {
    return <img className="card__image" src={props.src} alt={props.alt} />;
}
