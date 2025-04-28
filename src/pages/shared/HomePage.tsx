// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutGrid } from '../../layouts/LayoutGrid';
import { LayoutHeader } from '../../layouts/LayoutHeader';

import '../../layouts/layout-style.scss';

export function HomePage() {
    return (
        // <div className="layout-grid">
        //     <LayoutHeader />
        //     <main>
        //         <h1>Home Page</h1>
        //     </main>
        //     <LayoutFooter />
        // </div>

        <LayoutGrid>
            <LayoutHeader />
            <LayoutContent>
                <h1>Home Page</h1>
            </LayoutContent>
            <LayoutFooter />
        </LayoutGrid>
    );
}
