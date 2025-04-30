import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function HomePage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                {/* <Home /> */}
                <h1> Home Page </h1>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
