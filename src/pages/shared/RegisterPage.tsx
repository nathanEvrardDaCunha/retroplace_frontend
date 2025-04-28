// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

// IDEA: Rename FeatureUserCreation ?
import { RegisterUser } from '../../features/register/RegisterUser';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutGrid } from '../../layouts/LayoutGrid';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function RegisterPage() {
    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    // TODO: For password, should indicate to user the password rules before he submit for the first time.

    // TODO: Should indicate to user which fields are required before he submit for the first time.

    return (
        // <div>
        //     <HeaderLayout />
        //     <RegisterUser />
        //     <FooterLayout />
        // </div>

        <LayoutGrid>
            <LayoutHeader />
            <LayoutContent>
                <RegisterUser />
            </LayoutContent>
            <LayoutFooter />
        </LayoutGrid>
    );
}
