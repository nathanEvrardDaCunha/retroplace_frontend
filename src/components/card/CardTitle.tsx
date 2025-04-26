import './BrowseProduct.scss';

interface CardTitleProps {
    children: string;
}

export function CardTitle(props: CardTitleProps) {
    return <h4 className="product__title">{props.children}</h4>;
}
