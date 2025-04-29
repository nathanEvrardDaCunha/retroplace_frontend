import { Form } from '../../components/form/Form';
import { FormFieldset } from '../../components/form/form-fieldset/FormFieldset';
import { FormLegend } from '../../components/form/form-fieldset/FormLegend';
import { FormInputEmail } from '../../components/form/form-input/FormInputEmail';
import { FormInputPassword } from '../../components/form/form-input/FormInputPassword';
import { FormInputRadio } from '../../components/form/form-input/FormInputRadio';
import { FormInputText } from '../../components/form/form-input/FormInputText';
import { FormDescription } from '../../components/form/form-other/FormDescription';
import { FormLabel } from '../../components/form/form-other/FormLabel';
import { FormSection } from '../../components/form/form-other/FormSection';
import { Button } from '../../components/shared/Button';

import './register-style.scss';

// TODO: When form is a success, redirect to login page.
// TODO: When form is a success, tell it to the user through a message.
// TODO: Should indicate to user which fields are required before he submit for the first time.
// TODO: When Backend implemented, don't forget to verify user data on the server instead of client.
// TODO: For password, should indicate to user the password rules before he submit for the first time.

export function RegisterUser() {
    function handleAction(formData: FormData) {
        // Prevent event default

        console.log('Hello Form !');
    }

    return (
        <>
            <main className="main-register">
                {/* <h1 className="main-register__title">Create User Account</h1> */}

                <section className="main-register__content">
                    <Form action={handleAction}>
                        <FormFieldset>
                            <FormLegend>Register</FormLegend>

                            <FormSection variant="field">
                                <FormLabel variant="label" htmlFor={'username-account'}>
                                    Username
                                </FormLabel>
                                <FormDescription variant="description">Write down your username.</FormDescription>
                                <FormInputText
                                    id={'username-account'}
                                    name={'username-account'}
                                    placeholder={'NostalgicBuyer73'}
                                />
                            </FormSection>

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
                            </FormSection>

                            <FormSection variant="field">
                                <FormDescription variant="label">Role</FormDescription>
                                <FormDescription variant="description">
                                    Select the role of this account.
                                </FormDescription>

                                <FormSection variant="radio">
                                    <FormInputRadio id={'buyer'} name={'role-account'} value={'buyer'} />
                                    <FormLabel variant="radio" htmlFor={'buyer'}>
                                        Buyer
                                    </FormLabel>
                                </FormSection>

                                <FormSection variant="radio">
                                    <FormInputRadio id={'seller'} name={'role-account'} value={'seller'} />
                                    <FormLabel variant="radio" htmlFor={'seller'}>
                                        Seller
                                    </FormLabel>
                                </FormSection>
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
