import { BrowseProduct } from '../features/browse-products/BrowseProduct';
import { Layout } from '../layouts/Layout';
import { LayoutContent } from '../layouts/LayoutContent';
import { LayoutFooter } from '../layouts/LayoutFooter';
import { LayoutHeader } from '../layouts/LayoutHeader';

export function PageBrowseProduct() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseProduct />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
