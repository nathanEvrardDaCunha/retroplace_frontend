import { Form } from 'react-router-dom';
import { FormButton } from '../components/FormButton';
import { FormFieldset } from '../components/FormFieldset';
import { FormInput } from '../components/FormInput';
import { FormLabel } from '../components/FormLabel';
import { FormLegend } from '../components/FormLegend';

export function LoginForm() {
    return (
        <Form>
            <FormFieldset>
                <FormLegend>Log In to your Account</FormLegend>

                <FormLabel htmlFor={'email-account'}>Email</FormLabel>
                <FormInput idName={'email-account'} type={'email'} placeholder={'johndoe@gmail.com'} />

                <FormLabel htmlFor={'password-account'}>Password</FormLabel>
                <FormInput idName={'password-account'} type={'password'} placeholder={'***********'} />

                <FormButton>Log In</FormButton>
                <FormButton>Sign Up</FormButton>
                <FormButton>Reset Password</FormButton>
            </FormFieldset>
        </Form>
    );
}
