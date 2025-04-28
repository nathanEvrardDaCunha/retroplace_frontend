interface LayoutContentProps {
    children: React.ReactNode;
}

export function LayoutContent(props: LayoutContentProps) {
    return <div className="layout__content">{props.children}</div>;
}
