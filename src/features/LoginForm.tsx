import '../components/form/form-style.scss';

import { Form } from '../components/form/Form';
import { FormButton } from '../components/form/FormButton';
import { FormFieldset } from '../components/form/FormFieldset';
import { FormInput } from '../components/form/FormInput';
import { FormLabel } from '../components/form/FormLabel';
import { FormLegend } from '../components/form/FormLegend';

export function LoginForm() {
    return (
        <Form>
            <FormFieldset>
                <FormLegend>Form - Log In</FormLegend>

                <section>
                    <FormLabel htmlFor={'email-account'}>Email</FormLabel>
                    <FormInput idName={'email-account'} type={'email'} placeholder={'johndoe@gmail.com'} />
                </section>

                <section>
                    <FormLabel htmlFor={'password-account'}>Password</FormLabel>
                    <FormInput idName={'password-account'} type={'password'} placeholder={'***********'} />
                </section>

                <section>
                    <FormButton>Log In</FormButton>
                    <FormButton>Sign Up</FormButton>
                    <FormButton>Reset Password</FormButton>
                </section>
            </FormFieldset>
        </Form>
    );
}
