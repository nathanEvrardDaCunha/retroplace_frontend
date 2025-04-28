import { LoginUser } from '../../features/login/LoginUser';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { Layout } from '../../layouts/Layout';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function PageLogin() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <LoginUser />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
