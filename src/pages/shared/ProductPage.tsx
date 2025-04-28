// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

import { BrowseProduct } from '../../features/products/BrowseProduct';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutGrid } from '../../layouts/LayoutGrid';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function ProductPage() {
    return (
        // <div>
        //     <LayoutHeader />
        //     <BrowseProduct />
        //     <LayoutFooter />
        // </div>

        <LayoutGrid>
            <LayoutHeader />
            <LayoutContent>
                <BrowseProduct />
            </LayoutContent>
            <LayoutFooter />
        </LayoutGrid>
    );
}
