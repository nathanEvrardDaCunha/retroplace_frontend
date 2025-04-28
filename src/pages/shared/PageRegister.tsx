import { RegisterUser } from '../../features/register/RegisterUser';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { Layout } from '../../layouts/Layout';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function PageRegister() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <RegisterUser />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
