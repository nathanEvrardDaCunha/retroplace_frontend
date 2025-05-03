import { BrowseUsersLogic } from '../../../features/moderation/BrowseUsersLogic';
import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function BrowseUserPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseUsersLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
