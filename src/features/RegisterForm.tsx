import { Form } from '../components/form/Form';
import '../components/form/form-style.scss';
import { FormButton } from '../components/form/FormButton';
import { FormDescription } from '../components/form/semantics/FormDescription';
import { FormFieldset } from '../components/form/semantics/fieldset/FormFieldset';
import { FormLabel } from '../components/form/semantics/FormLabel';
import { FormLegend } from '../components/form/semantics/fieldset/FormLegend';
import { FormSection } from '../components/form/semantics/FormSection';
import { FormInputEmail } from '../components/form/inputs/input/FormInputEmail';
import { FormInputRadio } from '../components/form/inputs/input/FormInputRadio';
import { FormInputText } from '../components/form/inputs/input/FormInputText';
import { FormInputPassword } from '../components/form/inputs/input/FormInputPassword';

export function RegisterForm() {
    function handleAction(formData: FormData) {
        // prevent event default

        console.log('Hello Form !');
    }

    // TODO: When form is a success, redirect to login page.
    // TODO: When form is a success, tell it to the user through a message.
    return (
        <Form action={handleAction}>
            <FormFieldset>
                <FormLegend>Form - Create Account</FormLegend>

                <FormSection>
                    <FormSection>
                        <FormLabel htmlFor={'username-account'}>Username</FormLabel>
                        <FormDescription>Write down your username.</FormDescription>
                        <FormInputText
                            id={'username-account'}
                            name={'username-account'}
                            placeholder={'NostalgicBuyer73'}
                        />
                    </FormSection>

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
                        <FormButton>Next</FormButton>
                    </FormSection>
                </FormSection>

                <FormSection>
                    <FormDescription>Select the role of this account.</FormDescription>
                    <FormSection>
                        <FormInputRadio id={'buyer'} name={'role-account'} value={'buyer'} />
                        <FormLabel htmlFor={'buyer'}>Buyer</FormLabel>
                    </FormSection>

                    <FormSection>
                        <FormInputRadio id={'seller'} name={'role-account'} value={'seller'} />
                        <FormLabel htmlFor={'seller'}>Seller</FormLabel>
                    </FormSection>

                    <FormSection>
                        <FormButton>Submit</FormButton>
                    </FormSection>
                </FormSection>
            </FormFieldset>
        </Form>
    );
}
