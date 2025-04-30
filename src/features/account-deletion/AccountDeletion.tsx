import { Form } from '../../components/form/Form';
import { FormFieldset } from '../../components/form/form-fieldset/FormFieldset';
import { FormLegend } from '../../components/form/form-fieldset/FormLegend';
import { FormInputEmail } from '../../components/form/form-input/FormInputEmail';
import { FormInputPassword } from '../../components/form/form-input/FormInputPassword';
import { FormInputText } from '../../components/form/form-input/FormInputText';
import { FormDescription } from '../../components/form/form-other/FormDescription';
import { FormLabel } from '../../components/form/form-other/FormLabel';
import { FormSection } from '../../components/form/form-other/FormSection';
import { Button } from '../../components/shared/Button';

import './account-deletion-style.scss';

// TODO: Separate Update from Delete

export function AccountDeletion() {
    function handleAction(formData: FormData) {
        //prevent default

        console.log('form handled');
    }

    return (
        <>
            <main className="main-account-deletion">
                {/* <h1 className="main-account-deletion__title">Browse available products</h1> */}

                <section className="main-account-deletion__content">
                    <Form action={handleAction}>
                        <FormFieldset>
                            <FormLegend>Delete Account</FormLegend>

                            {/* Should be in an outlined red message */}
                            <p>This action is permanent and won't be solvable after.</p>

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

                            {/* The button should be red mark as "destructive" */}
                            <FormSection variant="button">
                                <Button>Delete Account</Button>
                            </FormSection>
                        </FormFieldset>
                    </Form>
                </section>
            </main>
        </>
    );
}
