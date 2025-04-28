import { NotFound } from '../../features/not-found/NotFound';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { Layout } from '../../layouts/Layout';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function PageNotFound() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <NotFound />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
