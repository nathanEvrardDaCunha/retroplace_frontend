// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

// TODO: Create a TSX ErrorMessage component with proper feature to display error ?

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
