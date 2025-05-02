import { LoginLogic } from '../../features/authentication/LoginLogic';
import { Layout } from '../../layouts/Layout';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function LoginPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <LoginLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
