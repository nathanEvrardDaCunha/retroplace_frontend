import { BrowseProduct } from '../../features/BrowseProduct';
import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

export function ProductPage() {
    return (
        <>
            <HeaderLayout />
            <BrowseProduct />
            <FooterLayout />
        </>
    );
}
