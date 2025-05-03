import { useState, SetStateAction } from 'react';
import { CustomForm } from '../../components/form/CustomForm';
import { CustomInput } from '../../components/form/CustomInput';
import { CustomLabel } from '../../components/form/CustomLabel';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomLink } from '../../components/ui/CustomLink';
import { CustomSection } from '../../components/ui/CustomSection';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function LoginLogic() {
    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');

    const navigate = useNavigate();

    function handleActionLogin(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        clearForm();

        // TODO: When form is a success, tell it to the user through a message.
        // TODO: When Backend implemented,  don't forget to implement an authentication system.
        // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

        navigate('/account/33');
    }

    function clearForm() {
        setFormEmail('');
        setFormPassword('');
    }

    return (
        <>
            <CustomForm action={handleActionLogin}>
                <CustomSection variant="article" style="column">
                    <CustomHeading variant="h1" style="h2">
                        Sign In
                    </CustomHeading>

                    <CustomHeading variant="p" style="p">
                        To connect to your personal account, input the relevant
                        information and submit the authentication form.
                    </CustomHeading>

                    <CustomSection variant="section" style="column">
                        <CustomLabel htmlFor="email-account" style="default">
                            Email
                        </CustomLabel>

                        <CustomHeading variant="p" style="small">
                            Write down your email address.
                        </CustomHeading>

                        <CustomInput
                            type="email"
                            id="email-account"
                            name="email-account"
                            required
                            value={formEmail}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormEmail(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel htmlFor="password-account" style="default">
                            Password
                        </CustomLabel>

                        <CustomHeading variant="p" style="small">
                            Write down your email password.
                        </CustomHeading>

                        <CustomInput
                            type="password"
                            id="password-account"
                            name="password-account"
                            required
                            value={formPassword}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormPassword(e.target.value)}
                        />

                        <CustomLink to="/reset-password" style="small">
                            Reset Password
                        </CustomLink>
                    </CustomSection>

                    <CustomSection variant="section" style="row">
                        <CustomLink to="/register" style="p">
                            Create Account
                        </CustomLink>

                        <Button variant="default" onClick={undefined}>
                            Authenticate Account
                        </Button>
                    </CustomSection>
                </CustomSection>
            </CustomForm>
        </>
    );
}
