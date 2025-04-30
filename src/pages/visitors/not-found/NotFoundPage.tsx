import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function NotFoundPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                {/* <NotFound /> */}

                <h1> Not Found Page </h1>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
