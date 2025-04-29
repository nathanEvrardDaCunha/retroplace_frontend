import { Form } from '../../components/form/Form';
import { FormFieldset } from '../../components/form/form-fieldset/FormFieldset';
import { FormLegend } from '../../components/form/form-fieldset/FormLegend';
import { FormInputEmail } from '../../components/form/form-input/FormInputEmail';
import { FormDescription } from '../../components/form/form-other/FormDescription';
import { FormLabel } from '../../components/form/form-other/FormLabel';
import { FormSection } from '../../components/form/form-other/FormSection';
import { Button } from '../../components/shared/Button';

import './reset-password-style.scss';

// When form is success, tell user to check his personal email address inbox.
// TODO: When form is a success, tell it to the user through a message.
// TODO: Should indicate to user which fields are required before he submit for the first time.
// TODO: When Backend implemented,  don't forget to implement an authentication system.
// TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

export function ResetPassword() {
    function handleAction(formData: FormData) {
        // Prevent event default

        console.log('Hello Form !');
    }

    return (
        <>
            <main className="main-reset-password">
                {/* <h1 className="main-login__title">Authenticate User Account</h1> */}

                <section className="main-reset-password__content">
                    <Form action={handleAction}>
                        <FormFieldset>
                            <FormLegend>Reset Password</FormLegend>

                            <FormSection variant="field">
                                <FormLabel variant="label" htmlFor={'email-account'}>
                                    Email
                                </FormLabel>
                                <FormDescription variant="description">Write down your email address.</FormDescription>
                                <FormInputEmail id={'email-account'} name={'email-account'} />
                            </FormSection>

                            <FormSection variant="button">
                                <Button>Submit</Button>
                            </FormSection>
                        </FormFieldset>
                    </Form>
                </section>
            </main>
        </>
    );
}
