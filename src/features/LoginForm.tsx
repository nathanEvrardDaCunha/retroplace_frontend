import { Form } from '../components/form/semantics/Form';
import '../components/form/form-style.scss';
import { FormButton } from '../components/form/FormButton';
import { FormDescription } from '../components/form/semantics/FormDescription';
import { FormFieldset } from '../components/form/semantics/fieldset/FormFieldset';
import { FormLabel } from '../components/form/inputs/FormLabel';
import { FormLegend } from '../components/form/semantics/fieldset/FormLegend';
import { FormInputPassword } from '../components/form/inputs/input/FormPassword';
import { FormSection } from '../components/form/semantics/FormSection';
import { FormInputEmail } from '../components/form/inputs/input/FormInputEmail';

export function LoginForm() {
    function handleAction(formData: FormData) {
        // prevent event default

        console.log('Hello Form !');
    }

    // TODO: When form is a success, redirect to personal-account page.
    // TODO: When form is a success, tell it to the user through a message.
    return (
        <Form action={handleAction}>
            <FormFieldset>
                <FormLegend>Form - Log In</FormLegend>

                <FormSection>
                    <FormLabel htmlFor={'email-account'}>Email</FormLabel>
                    <FormDescription>Write down your email address.</FormDescription>
                    <FormInputEmail id={'email-account'} name={'email-account'} />
                </FormSection>

                <FormSection>
                    <FormLabel htmlFor={'password-account'}>Password</FormLabel>
                    <FormDescription>Write down your password.</FormDescription>
                    <FormInputPassword id={'password-account'} name={'password-account'} />
                </FormSection>

                <FormSection>
                    <FormButton>Log In</FormButton>
                    <FormButton>Sign Up</FormButton>
                    <FormButton>Reset Password</FormButton>
                </FormSection>
            </FormFieldset>
        </Form>
    );
}
