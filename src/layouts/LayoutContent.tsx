interface LayoutContentProps {
    children: React.ReactNode;
}

export function LayoutContent(props: LayoutContentProps) {
    return <div className="layout-content">{props.children}</div>;
}
