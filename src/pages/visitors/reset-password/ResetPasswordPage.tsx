import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';
import { ResetPasswordLogic } from '../../../features/authentication/reset-password/ResetPasswordLogic';

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
