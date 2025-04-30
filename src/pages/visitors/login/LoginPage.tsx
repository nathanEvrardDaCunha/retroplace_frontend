import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';
import { LoginLogic } from '../../../features/authentication/login/LoginLogic';

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
