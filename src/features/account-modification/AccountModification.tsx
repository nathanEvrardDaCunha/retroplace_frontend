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

import './account-modification-style.scss';

// TODO: Separate Update from Delete

export function AccountModification() {
    function handleAction(formData: FormData) {
        //prevent default

        console.log('form handled');
    }

    return (
        <>
            <main className="main-account-modification">
                {/* <h1 className="main-account-modification__title">Browse available products</h1> */}

                <section className="main-account-modification__content">
                    <Form action={handleAction}>
                        <FormFieldset>
                            <FormLegend>Update Account</FormLegend>

                            <FormSection variant="field">
                                <FormLabel variant="label" htmlFor={'username-account'}>
                                    Username
                                </FormLabel>
                                <FormDescription variant="description">Write down your new username.</FormDescription>
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
                                <FormDescription variant="description">
                                    Write down your new email address.
                                </FormDescription>
                                <FormInputEmail id={'email-account'} name={'email-account'} />
                            </FormSection>

                            <FormSection variant="field">
                                <FormLabel variant="label" htmlFor={'password-account'}>
                                    Password
                                </FormLabel>
                                <FormDescription variant="description">Write down your new password.</FormDescription>
                                <FormInputPassword id={'password-account'} name={'password-account'} />
                            </FormSection>

                            <FormSection variant="button">
                                <Button>Update</Button>
                            </FormSection>
                        </FormFieldset>
                    </Form>
                </section>
            </main>
        </>
    );
}
