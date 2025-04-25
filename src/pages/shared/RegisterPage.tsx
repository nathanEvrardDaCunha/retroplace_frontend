import { RegisterForm } from '../../features/RegisterForm';
import { FooterLayout } from '../../layouts/FooterLayout';
import { HeaderLayout } from '../../layouts/HeaderLayout';

// TODO: For .main{} in CSS, always use the --color-tertiary, and use --color-primary for interactive element.

export function RegisterPage() {
    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    // TODO: For password, should indicate to user the password rules before he submit for the first time.

    // TODO: Should indicate to user which fields are required before he submit for the first time.

    return (
        <>
            <HeaderLayout />
            <RegisterForm />
            <FooterLayout />
        </>
    );
}
