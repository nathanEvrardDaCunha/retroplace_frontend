import { SetStateAction, useState } from 'react';
import { CustomForm } from '../../components/form/CustomForm';
import { CustomInput } from '../../components/form/CustomInput';
import { CustomButton } from '../../components/ui/CustomButton';
import { CustomSection } from '../../components/ui/CustomSection';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomLabel } from '../../components/form/CustomLabel';

export function ResetPasswordLogic() {
    const [formPassword, setFormPassword] = useState('');

    function handleActionResetPassword(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        clearForm();
    }

    function clearForm() {
        setFormPassword('');
    }

    // TODO: When form is a success, redirect to login page.
    // TODO: When form is a success, tell it to the user through a message.
    // TODO: When Backend implemented,  don't forget to implement an authentication system.
    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    return (
        <>
            <CustomForm action={handleActionResetPassword}>
                <CustomSection variant="article" style="column">
                    <CustomHeading variant="h1" style="h2">
                        Reset Password
                    </CustomHeading>

                    <CustomHeading variant="p" style="p">
                        To change your forgotten password, input the email
                        address related to it.
                    </CustomHeading>

                    <CustomSection variant="section" style="column">
                        <CustomLabel htmlFor="email-account" style={'default'}>
                            Email
                        </CustomLabel>
                        <CustomHeading variant="small" style="small">
                            Write down your email address.
                        </CustomHeading>
                        <CustomInput
                            type="email"
                            id="email-account"
                            name="email-account"
                            placeholder="gamer@gmail.com"
                            required
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormPassword(e.target.value)}
                            value={formPassword}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="row">
                        <CustomButton variant="default" onClick={undefined}>
                            Reset Password
                        </CustomButton>
                    </CustomSection>
                </CustomSection>
            </CustomForm>
        </>
    );
}
