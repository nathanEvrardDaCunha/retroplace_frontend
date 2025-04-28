import './layout-style.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
    return <div className="layout">{props.children}</div>;
}
