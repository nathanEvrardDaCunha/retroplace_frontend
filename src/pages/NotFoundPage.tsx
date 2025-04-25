import { FooterLayout } from '../layouts/FooterLayout';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { MainLayout } from '../layouts/MainLayout';

export function NotFoundPage() {
    // TODO: Add a link that return to the previous page or home page.
    return (
        <>
            <HeaderLayout />
            <MainLayout>
                <h1>Error 404: Page not found</h1>
            </MainLayout>
            <FooterLayout />
        </>
    );
}
