import { DeleteAccountLogic } from '../../features/account/DeleteAccountLogic';
import { UpdateAccountLogic } from '../../features/account/UpdateAccountLogic';
import { Layout } from '../../layouts/Layout';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function AccountModificationPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <UpdateAccountLogic />
                <DeleteAccountLogic />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
