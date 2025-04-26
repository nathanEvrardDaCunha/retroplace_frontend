import './BrowseProduct.scss';

interface CardSectionProps {
    children: React.ReactNode;
    variant: 'characteristics' | 'buttons';
}

export function CardSection(props: CardSectionProps) {
    if (props.variant === 'characteristics') {
        return <section className="product__characteristics">{props.children}</section>;
    }

    return <section className="product__buttons">{props.children}</section>;
}
