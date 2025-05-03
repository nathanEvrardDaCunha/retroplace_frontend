import { SetStateAction, useState } from 'react';
import { CustomForm } from '../../components/form/CustomForm';
import { CustomInput } from '../../components/form/CustomInput';
import { CustomLabel } from '../../components/form/CustomLabel';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomSection } from '../../components/ui/CustomSection';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

// TODO: Add Server Side Verification to make sure the "password" and "confirmation message" are valid
// TODO: Need to automatically redirect the user to the "home" page

export function DeleteAccountLogic() {
    const [formConfirmation, setFormConfirmation] = useState('');
    const [formPassword, setFormPassword] = useState('');

    const navigate = useNavigate();

    function handleActionDeleteAccount(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        clearForm();

        // TODO: When form is a failure, tell it to the user through a message.
        // TODO: When Backend implemented,  don't forget to implement an authentication system.
        // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

        navigate('/');
    }

    function clearForm() {
        setFormConfirmation('');
        setFormPassword('');
    }

    return (
        <>
            <CustomForm action={handleActionDeleteAccount}>
                <CustomSection variant="article" style="column">
                    <CustomHeading variant="h1" style="h2">
                        Update Account
                    </CustomHeading>

                    <CustomHeading variant="p" style="p">
                        To update your personal information, input the new
                        relevant one and submit this specific form.
                    </CustomHeading>

                    <CustomSection variant="section" style="column">
                        <CustomLabel
                            htmlFor="delete-confirmation"
                            style={'default'}
                        >
                            Confirmation
                        </CustomLabel>
                        <CustomHeading variant="small" style="small">
                            Write down "I agreed to permanently delete my
                            account.".
                        </CustomHeading>
                        <CustomInput
                            type="text"
                            id="delete-confirmation"
                            name="delete-confirmation"
                            required
                            placeholder="I agreed to permanently delete my
                            account."
                            value={formConfirmation}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormConfirmation(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel htmlFor="delete-password" style="default">
                            Password
                        </CustomLabel>
                        <CustomHeading variant="small" style="small">
                            Write down your password.
                        </CustomHeading>
                        <CustomInput
                            type="password"
                            id="delete-password"
                            name="delete-password"
                            required
                            value={formPassword}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormPassword(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="row">
                        <Button variant="destructive" onClick={undefined}>
                            Delete Account
                        </Button>
                    </CustomSection>
                </CustomSection>
            </CustomForm>
        </>
    );
}
