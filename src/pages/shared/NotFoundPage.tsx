// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

import { NotFound } from '../../features/not-found/NotFound';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutGrid } from '../../layouts/LayoutGrid';
import { LayoutHeader } from '../../layouts/LayoutHeader';

// TODO: Create a TSX ErrorMessage component with proper feature to display error ?

export function NotFoundPage() {
    // TODO: Add a link that return to the previous page or home page.
    return (
        // <div>
        //     <LayoutHeader />
        //     {/* <main>
        //         <h1>Error 404: Page not found</h1>
        //     </main> */}
        //     <NotFound />
        //     <LayoutFooter />
        // </div>

        <LayoutGrid>
            <LayoutHeader />
            <LayoutContent>
                <NotFound />
            </LayoutContent>
            <LayoutFooter />
        </LayoutGrid>
    );
}
