import { BrowseUsersBanLogic } from '../../../features/moderation/BrowseUsersBanLogic';
import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function BrowseUsersBanPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseUsersBanLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
