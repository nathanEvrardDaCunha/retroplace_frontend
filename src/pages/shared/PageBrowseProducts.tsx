import { BrowseProduct } from '../../features/products/BrowseProduct';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { Layout } from '../../layouts/Layout';
import { LayoutHeader } from '../../layouts/LayoutHeader';

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
