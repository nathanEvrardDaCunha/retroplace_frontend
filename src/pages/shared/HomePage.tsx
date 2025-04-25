import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

export function HomePage() {
    return (
        <>
            <HeaderLayout />
            <main>
                <h1>Home Page</h1>
            </main>
            <FooterLayout />
        </>
    );
}
