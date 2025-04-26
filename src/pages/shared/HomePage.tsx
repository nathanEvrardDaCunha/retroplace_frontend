// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

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
