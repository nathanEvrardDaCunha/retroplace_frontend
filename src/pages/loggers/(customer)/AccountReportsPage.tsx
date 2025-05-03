import { BrowseAccountReportsLogic } from '../../../features/moderation/BrowseAccountReportsLogic';
import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function AccountReportsPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseAccountReportsLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
