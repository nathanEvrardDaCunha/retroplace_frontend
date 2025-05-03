import { BrowseUserReportLogic } from '../../../features/moderation/BrowseUserReportLogic';
import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function BrowseUserReportPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <BrowseUserReportLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
