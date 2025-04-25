import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

export function NotFoundPage() {
    // TODO: Add a link that return to the previous page or home page.
    return (
        <>
            <HeaderLayout />
            <main>
                <h1>Error 404: Page not found</h1>
            </main>
            <FooterLayout />
        </>
    );
}
