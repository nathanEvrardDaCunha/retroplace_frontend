import './layout-style.scss';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
    return <main className="main">{props.children}</main>;
}
