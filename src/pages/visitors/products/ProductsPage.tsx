import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';
import { BrowseProductLogic } from '../../../features/product/browse-product/BrowseProductLogic';

export function ProductsPage() {
    // TODO: Implement one section to filter available product.
    // TODO: Implement one section to sort available product.
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseProductLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
