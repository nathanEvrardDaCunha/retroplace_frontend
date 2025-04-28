import { Home } from '../features/home/Home';
import { Layout } from '../layouts/Layout';
import { LayoutContent } from '../layouts/LayoutContent';
import { LayoutFooter } from '../layouts/LayoutFooter';
import { LayoutHeader } from '../layouts/LayoutHeader';

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
