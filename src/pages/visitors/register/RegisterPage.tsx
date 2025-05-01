import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';
import { RegisterLogic } from '../../../features/authentication/register/RegisterLogic';

export function RegisterPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <RegisterLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
