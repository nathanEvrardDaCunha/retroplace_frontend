interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
    return <main>{props.children}</main>;
}
