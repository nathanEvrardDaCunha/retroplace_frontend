import { ResetPasswordLogic } from '../../features/authentication/ResetPasswordLogic';
import { Layout } from '../../layouts/Layout';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function ResetPasswordPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <ResetPasswordLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
