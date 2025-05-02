import './ui-style.scss';

interface CustomSectionProps {
    children: React.ReactNode;
    variant: 'section' | 'article';
    style: 'row' | 'column';
}

// IDEA: Make variant optional with ternary
// IDEA: Make style optional with ternary
// IDEA: Make gap optional with ternary

export function CustomSection(props: CustomSectionProps) {
    const styleClass = `section--${props.style}`;
    const variantClass = `section--${props.variant}`;
    const className = `${styleClass} ${variantClass}`;

    return (
        <props.variant className={className}>{props.children}</props.variant>
    );
}

// // IDEA: Outline Card
// // IDEA: Are Card and CustomSection doing the exact same thing differently ? Should they be merged ?
// // IDEA: "gap"

// // Interesting page to look at for style consequences: Login / Register / NotFound
// // Will try to pass this to Products too
