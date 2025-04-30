import './layout-style.scss';

interface LayoutProps {
    children: React.ReactNode;
}

// TODO: Need to find a way to add <main></main>, <aside></aside> without breaking anything.

export function Layout(props: LayoutProps) {
    return <div className="layout">{props.children}</div>;
}
