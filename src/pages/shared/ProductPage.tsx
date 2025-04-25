import { BrowseProduct } from '../../features/BrowseProduct';
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
