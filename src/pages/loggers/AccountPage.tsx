import { BrowseAccountLogic } from '../../features/account/BrowseAccountLogic';
import { Layout } from '../../layouts/Layout';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function AccountPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseAccountLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
