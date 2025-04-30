import { Form } from '../../components/form/Form';
import { FormFieldset } from '../../components/form/form-fieldset/FormFieldset';
import { FormLegend } from '../../components/form/form-fieldset/FormLegend';
import { FormInputEmail } from '../../components/form/form-input/FormInputEmail';
import { FormInputPassword } from '../../components/form/form-input/FormInputPassword';
import { FormDescription } from '../../components/form/form-other/FormDescription';
import { FormLabel } from '../../components/form/form-other/FormLabel';
import { FormSection } from '../../components/form/form-other/FormSection';
import { Button } from '../../components/shared/Button';
import { CustomLink } from '../../components/shared/CustomLink';

import './login-style.scss';

// TODO: When form is a success, redirect to personal-account page.
// TODO: When form is a success, tell it to the user through a message.
// TODO: Should indicate to user which fields are required before he submit for the first time.
// IDEA: Rename FeatureUserCreation ?
// TODO: When Backend implemented,  don't forget to implement an authentication system.
// TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

export function LoginUser() {
    function handleAction(formData: FormData) {
        // Prevent event default

        console.log('Hello Form !');
    }

    return (
        <>
            <main className="main-login">
                {/* <h1 className="main-login__title">Authenticate User Account</h1> */}

                <section className="main-login__content">
                    <Form action={handleAction}>
                        <FormFieldset>
                            <FormLegend>Login</FormLegend>

                            <FormSection variant="field">
                                <FormLabel variant="label" htmlFor={'email-account'}>
                                    Email
                                </FormLabel>
                                <FormDescription variant="description">Write down your email address.</FormDescription>
                                <FormInputEmail id={'email-account'} name={'email-account'} />
                            </FormSection>

                            <FormSection variant="field">
                                <FormLabel variant="label" htmlFor={'password-account'}>
                                    Password
                                </FormLabel>
                                <FormDescription variant="description">Write down your password.</FormDescription>
                                <FormInputPassword id={'password-account'} name={'password-account'} />
                                <CustomLink variant="top-padding" to={'/reset-password'}>
                                    Reset Password
                                </CustomLink>
                            </FormSection>

                            <FormSection variant="button">
                                <Button>Submit</Button>

                                <CustomLink variant="no-padding" to={'/reset-password'}>
                                    Create Account
                                </CustomLink>
                            </FormSection>
                        </FormFieldset>
                    </Form>
                </section>
            </main>
        </>
    );
}
