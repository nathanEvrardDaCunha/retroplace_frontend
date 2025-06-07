import { SetStateAction, useState } from 'react';
import { CustomForm } from '../../components/form/CustomForm';
import { CustomInput } from '../../components/form/CustomInput';
import { CustomLabel } from '../../components/form/CustomLabel';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomLink } from '../../components/ui/CustomLink';
import { CustomSection } from '../../components/ui/CustomSection';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

console.log(`This test the render of the component OUTSIDE with console.log`);

export function RegisterLogic() {
    console.log(
        `This test the render of the component INSIDE with console.log`
    );

    const [formUsername, setFormUsername] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');
    const [formRadio, setFormRadio] = useState('');

    const navigate = useNavigate();

    function handleActionRegister(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        clearForm();

        // TODO: When form is a failure, tell it to the user through a message.
        // TODO: When Backend implemented,  don't forget to implement an authentication system.
        // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

        navigate('/login');
    }

    function clearForm() {
        setFormUsername('');
        setFormEmail('');
        setFormPassword('');
        setFormRadio('');
    }

    return (
        <>
            <CustomForm action={handleActionRegister}>
                <CustomSection variant="article" style="column">
                    <CustomHeading variant="h1" style="h2">
                        Sign Up
                    </CustomHeading>

                    <CustomHeading variant="p" style="p">
                        To use our website, create your account by inputting the
                        relevant information and submit the creation form.
                    </CustomHeading>

                    <CustomSection variant="section" style="column">
                        <CustomLabel style="default" htmlFor="username-account">
                            Username
                        </CustomLabel>

                        <CustomHeading variant="p" style="small">
                            Write down your username.
                        </CustomHeading>

                        <CustomInput
                            type="text"
                            id="username-account"
                            name="username-account"
                            required
                            value={formUsername}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormUsername(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel style="default" htmlFor="email-account">
                            Email
                        </CustomLabel>

                        <CustomHeading variant="p" style="small">
                            Write down your email address.
                        </CustomHeading>

                        <CustomInput
                            id="email-account"
                            name="email-account"
                            type="email"
                            required
                            value={formEmail}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormEmail(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel style="default" htmlFor="password-account">
                            Password
                        </CustomLabel>

                        <CustomHeading variant="p" style="small">
                            Write down your password.
                        </CustomHeading>

                        <CustomInput
                            id="password-account"
                            name="password-account"
                            type="password"
                            required
                            value={formPassword}
                            onChange={(e: {
                                target: { value: SetStateAction<string> };
                            }) => setFormPassword(e.target.value)}
                        />
                    </CustomSection>

                    <CustomSection variant="section" style="column">
                        <CustomLabel htmlFor={undefined} style="default">
                            Role
                        </CustomLabel>

                        <CustomHeading variant="p" style="small">
                            Select your role.
                        </CustomHeading>

                        <CustomSection variant="section" style="row">
                            <CustomInput
                                id="buyer"
                                name="role-account"
                                value="buyer"
                                type="radio"
                                required
                                checked={formRadio === 'buyer'}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setFormRadio(e.target.value)}
                            />

                            <CustomLabel style="radio" htmlFor="buyer">
                                Buyer
                            </CustomLabel>
                        </CustomSection>

                        <CustomSection variant="section" style="row">
                            <CustomInput
                                id="seller"
                                name="role-account"
                                value="seller"
                                type="radio"
                                required
                                checked={formRadio === 'seller'}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setFormRadio(e.target.value)}
                            />

                            <CustomLabel style="radio" htmlFor="seller">
                                Seller
                            </CustomLabel>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="section" style="row">
                        <CustomLink to="/login" style="p">
                            Login Instead
                        </CustomLink>

                        <Button variant="default" onClick={undefined}>
                            Create Account
                        </Button>
                    </CustomSection>
                </CustomSection>
            </CustomForm>
        </>
    );
}
