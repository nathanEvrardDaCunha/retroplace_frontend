// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

import { BrowseProduct } from '../../features/products/BrowseProduct';
import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

export function ProductPage() {
    return (
        <>
            <HeaderLayout />
            <BrowseProduct />
            <FooterLayout />
        </>
    );
}
