import { SetStateAction, useState } from 'react';
import { CustomForm } from '../../components/form/CustomForm';
import { CustomInput } from '../../components/form/CustomInput';
import { CustomLabel } from '../../components/form/CustomLabel';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomSection } from '../../components/ui/CustomSection';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

// TODO: Need to inform the user the form was either a failure or a success

export function UpdateAccountLogic() {
    const [formUsername, setFormUsername] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');

    const navigate = useNavigate();

    function handleActionUpdateAccount(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        clearForm();

        // TODO: When form is a failure, tell it to the user through a message.
        // TODO: When Backend implemented,  don't forget to implement an authentication system.
        // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

        navigate('/account/33');
    }

    function clearForm() {
        setFormUsername('');
        setFormEmail('');
        setFormPassword('');
    }

    return (
        <>
            <CustomForm action={handleActionUpdateAccount}>
                <CustomSection variant={'article'} style={'column'}>
                    <CustomHeading variant="h1" style="h2">
                        Update Account
                    </CustomHeading>

                    <CustomHeading variant="p" style="p">
                        To update your personal information, input the new
                        relevant one and submit this specific form.
                    </CustomHeading>

                    <CustomSection variant="section" style="column">
                        <CustomLabel
                            style={'default'}
                            htmlFor="update-username"
                        >
                            Username
                        </CustomLabel>
                        <CustomHeading variant={'small'} style={'small'}>
                            Write down your new username
                        </CustomHeading>
                        <CustomInput
                            type="text"
                            id="update-username"
                            name="update-username"
                            placeholder="NostalgicBuyer73"
                            required
                            value={formUsername}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormUsername(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel style={'default'} htmlFor="update-email">
                            Email
                        </CustomLabel>
                        <CustomHeading variant={'small'} style={'small'}>
                            Write down your new email address.
                        </CustomHeading>
                        <CustomInput
                            type="email"
                            id="update-email"
                            name="update-email"
                            required
                            value={formEmail}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormEmail(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel
                            style={'default'}
                            htmlFor="update-password"
                        >
                            Password
                        </CustomLabel>
                        <CustomHeading variant={'small'} style={'small'}>
                            Write down your new password.
                        </CustomHeading>
                        <CustomInput
                            type="password"
                            id="update-password"
                            name="update-password"
                            required
                            value={formPassword}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormPassword(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="row">
                        <Button variant="outline" onClick={undefined}>
                            Update Account
                        </Button>
                    </CustomSection>
                </CustomSection>
            </CustomForm>
        </>
    );
}
