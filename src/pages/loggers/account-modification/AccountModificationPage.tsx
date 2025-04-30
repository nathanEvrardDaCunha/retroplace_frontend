import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';
import { DeleteAccountLogic } from '../../../features/account/delete-account/DeleteAccountLogic';
import { UpdateAccountLogic } from '../../../features/account/update-account/UpdateAccountLogic';

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
