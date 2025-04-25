import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';
import { MainLayout } from '../../layouts/MainLayout';

export function HomePage() {
    return (
        <>
            <HeaderLayout />
            <MainLayout>
                <h1>Home Page</h1>
            </MainLayout>
            <FooterLayout />
        </>
    );
}
