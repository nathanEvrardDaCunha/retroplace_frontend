import '../BrowseProduct.scss';

interface CardFigCaptionProps {
    children: string;
}

export function CardFigCaption(props: CardFigCaptionProps) {
    return <figcaption className="product__caption">{props.children}</figcaption>;
}
