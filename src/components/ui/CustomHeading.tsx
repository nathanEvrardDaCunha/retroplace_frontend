import './ui-style.scss';

interface CustomHeadingProps {
    children: React.ReactNode | string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
    style: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
}

// IDEA: Make variant optional with ternary
// IDEA: Make style optional with ternary

export function CustomHeading(props: CustomHeadingProps) {
    const className = `heading--${props.style}`;

    return (
        <props.variant className={className}>{props.children}</props.variant>
    );
}
