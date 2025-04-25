import { BrowseProduct } from '../features/BrowseProduct';
import { FooterLayout } from '../layouts/FooterLayout';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { MainLayout } from '../layouts/MainLayout';

export function ProductPage() {
    return (
        <>
            <HeaderLayout></HeaderLayout>
            <MainLayout>
                <BrowseProduct />
            </MainLayout>
            <FooterLayout></FooterLayout>
        </>
    );
}
