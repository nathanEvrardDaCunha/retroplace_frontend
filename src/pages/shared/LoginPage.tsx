// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

import { LoginUser } from '../../features/login/LoginUser';
import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

export function LoginPage() {
    // TODO: When Backend implemented,  don't forget to implement an authentication system.

    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    // TODO: Should indicate to user which fields are required before he submit for the first time.

    return (
        <>
            <HeaderLayout />
            <LoginUser />
            <FooterLayout />
        </>
    );
}
