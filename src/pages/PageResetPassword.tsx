import { ResetPassword } from '../features/reset-password/ResetPassword';
import { Layout } from '../layouts/Layout';
import { LayoutContent } from '../layouts/LayoutContent';
import { LayoutFooter } from '../layouts/LayoutFooter';
import { LayoutHeader } from '../layouts/LayoutHeader';

export function PageResetPassword() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <ResetPassword />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
