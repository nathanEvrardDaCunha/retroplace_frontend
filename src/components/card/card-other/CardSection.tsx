interface CardSectionProps {
    children: React.ReactNode;
    variant: 'characteristics' | 'buttons';
}

export function CardSection(props: CardSectionProps) {
    if (props.variant === 'characteristics') {
        return <section className="card__characteristics">{props.children}</section>;
    }

    return <section className="card__buttons">{props.children}</section>;
}
