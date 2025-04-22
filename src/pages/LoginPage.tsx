import { LoginForm } from '../features/LoginForm';
import { FooterLayout } from '../layouts/FooterLayout';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { MainLayout } from '../layouts/MainLayout';

export function LoginPage() {
    // TODO: When Backend implemented,  don't forget to implement an authentication system.

    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    // TODO: Should indicate to user which fields are required before he submit for the first time.

    return (
        <>
            <HeaderLayout />
            <MainLayout>
                <LoginForm />
            </MainLayout>
            <FooterLayout />
        </>
    );
}
