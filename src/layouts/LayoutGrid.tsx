interface LayoutGridProps {
    children: React.ReactNode;
}

export function LayoutGrid(props: LayoutGridProps) {
    return <div className="layout-grid">{props.children}</div>;
}
