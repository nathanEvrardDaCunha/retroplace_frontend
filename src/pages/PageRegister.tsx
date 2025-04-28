import { RegisterUser } from '../features/register/RegisterUser';
import { Layout } from '../layouts/Layout';
import { LayoutContent } from '../layouts/LayoutContent';
import { LayoutFooter } from '../layouts/LayoutFooter';
import { LayoutHeader } from '../layouts/LayoutHeader';

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
