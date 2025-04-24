import '../components/form/form-style.scss';

import { Form } from '../components/form/Form';
import { FormButton } from '../components/form/FormButton';
import { FormFieldset } from '../components/form/FormFieldset';
import { FormInput } from '../components/form/FormInput';
import { FormLabel } from '../components/form/FormLabel';
import { FormLegend } from '../components/form/FormLegend';
import { FormInputRadio } from '../components/form/FormInputRadio';

export function RegisterForm() {
    return (
        <Form>
            <FormFieldset>
                <FormLegend>Form - Create Account</FormLegend>

                <section>
                    <section>
                        <FormLabel htmlFor={'username-account'}>Username</FormLabel>
                        <p>Write down your username.</p>
                        <FormInput idName={'username-account'} type={'text'} placeholder={'NostalgicBuyer73'} />
                    </section>

                    <section>
                        <FormLabel htmlFor={'email-account'}>Email</FormLabel>
                        <p>Write down your email address.</p>
                        <FormInput idName={'email-account'} type={'email'} placeholder={'johndoe@gmail.com'} />
                    </section>

                    <section>
                        <FormLabel htmlFor={'password-account'}>Password</FormLabel>
                        <p>Write down your password.</p>
                        <FormInput idName={'password-account'} type={'password'} placeholder={'***********'} />
                    </section>

                    {/* <section>
                        <FormLabel htmlFor={'birthdate-account'}>Birthdate</FormLabel>
                        <p>Input your birthdate.</p>
                        <FormInput idName={'birthdate-account'} type={'date'} />
                    </section> */}

                    <section>
                        <FormButton>Next</FormButton>
                    </section>
                </section>

                <section>
                    <p>Select the role of this account.</p>
                    <section>
                        <FormInputRadio id={'buyer'} name={'role-account'} value={'buyer'} />
                        <FormLabel htmlFor={'buyer'}>Buyer</FormLabel>
                    </section>

                    <section>
                        <FormInputRadio id={'seller'} name={'role-account'} value={'seller'} />
                        <FormLabel htmlFor={'seller'}>Seller</FormLabel>
                    </section>

                    {/* <FormSection>
                        <FormDescription>Select your favorite programming language.</FormDescription>
                        <FormSection>
                            <FormInputRadio id="rust" name="favorite-language" value="rust" />
                            <FormLabel htmlFor="rust">Rust</FormLabel>
                        </FormSection>

                        <FormSection>
                            <FormInputRadio id="golang" name="favorite-language" value="golang" />
                            <FormLabel htmlFor="golang">Golang</FormLabel>
                        </FormSection>

                        <FormSection>
                            <FormInputRadio id="javascript" name="favorite-language" value="javascript" />
                            <FormLabel htmlFor="javascript">JavaScript</FormLabel>
                        </FormSection>
                    </FormSection> */}

                    <section>
                        <FormButton>Submit</FormButton>
                    </section>
                </section>
            </FormFieldset>
        </Form>
    );
}
