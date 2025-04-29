import { BrowseSellerAccount } from '../features/browse-seller-account/BrowseSellerAccount';
import { Layout } from '../layouts/Layout';
import { LayoutContent } from '../layouts/LayoutContent';
import { LayoutFooter } from '../layouts/LayoutFooter';
import { LayoutHeader } from '../layouts/LayoutHeader';

export function PageSellerAccount() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseSellerAccount />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
