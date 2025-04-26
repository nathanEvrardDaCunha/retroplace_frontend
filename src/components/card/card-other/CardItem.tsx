interface CardItemProps {
    children: string;
    variant: 'item' | 'price';
}

export function CardItem(props: CardItemProps) {
    if (props.variant === 'item') {
        return <p className="product__item">{props.children}</p>;
    }
    return <p className="product__price">{props.children}</p>;
}
