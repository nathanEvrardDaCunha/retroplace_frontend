import { AccountDeletion } from '../features/account-deletion/AccountDeletion';
import { AccountModification } from '../features/account-modification/AccountModification';
import { Layout } from '../layouts/Layout';
import { LayoutContent } from '../layouts/LayoutContent';
import { LayoutFooter } from '../layouts/LayoutFooter';
import { LayoutHeader } from '../layouts/LayoutHeader';

export function PageAccountModification() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <AccountModification />
                <AccountDeletion />
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
