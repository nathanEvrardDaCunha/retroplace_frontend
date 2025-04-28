import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { Layout } from '../../layouts/Layout';
import { LayoutHeader } from '../../layouts/LayoutHeader';
import { Home } from '../../features/home/Home';

export function PageHome() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <Home />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
