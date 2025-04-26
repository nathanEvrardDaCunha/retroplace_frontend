import { Form } from '../../components/form/Form';
import { FormFieldset } from '../../components/form/form-fieldset/FormFieldset';
import { FormLegend } from '../../components/form/form-fieldset/FormLegend';
import { FormInputEmail } from '../../components/form/form-input/FormInputEmail';
import { FormInputPassword } from '../../components/form/form-input/FormInputPassword';
import { FormDescription } from '../../components/form/form-other/FormDescription';
import { FormLabel } from '../../components/form/form-other/FormLabel';
import { FormSection } from '../../components/form/form-other/FormSection';
import { Button } from '../../components/shared/Button';

export function LoginForm() {
    function handleAction(formData: FormData) {
        // prevent event default

        console.log('Hello Form !');
    }

    // TODO: When form is a success, redirect to personal-account page.
    // TODO: When form is a success, tell it to the user through a message.
    return (
        <main>
            <Form action={handleAction}>
                <FormFieldset>
                    <FormLegend>Form - Log In</FormLegend>

                    <FormSection>
                        <FormLabel variant="label" htmlFor={'email-account'}>
                            Email
                        </FormLabel>
                        <FormDescription variant="description">Write down your email address.</FormDescription>
                        <FormInputEmail id={'email-account'} name={'email-account'} />
                    </FormSection>

                    <FormSection>
                        <FormLabel variant="label" htmlFor={'password-account'}>
                            Password
                        </FormLabel>
                        <FormDescription variant="description">Write down your password.</FormDescription>
                        <FormInputPassword id={'password-account'} name={'password-account'} />
                    </FormSection>

                    <FormSection>
                        <Button>Log In</Button>
                        <Button>Sign Up</Button>
                        <Button>Reset Password</Button>
                    </FormSection>
                </FormFieldset>
            </Form>
        </main>
    );
}
