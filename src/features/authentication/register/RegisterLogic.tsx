import { CustomButton } from '../../../components/ui/CustomButton';

export function RegisterLogic() {
    function handleActionRegister(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    // TODO: When form is a success, redirect to personal-account page.
    // TODO: When form is a success, tell it to the user through a message.
    // TODO: When Backend implemented,  don't forget to implement an authentication system.
    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    return (
        <>
            <form action={handleActionRegister}>
                <fieldset>
                    <legend>Register</legend>

                    <section>
                        <label htmlFor="username-account">Username</label>
                        <p>Write down your username.</p>
                        <input
                            type="text"
                            id="username-account"
                            name="username-account"
                            placeholder="NostalgicBuyer73"
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="email-account">Email</label>
                        <p>Write down your email address.</p>
                        <input
                            id="email-account"
                            name="email-account"
                            type="email"
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="password-account">Password</label>
                        <p>Write down your password.</p>
                        <input
                            id="password-account"
                            name="password-account"
                            type="password"
                            required
                        />
                    </section>

                    {/* Default value because can't required ??? */}
                    <section>
                        <label>Role</label>
                        <p>Select the role of this account.</p>

                        <input
                            id="buyer"
                            name="role-account"
                            value="buyer"
                            type="radio"
                        />
                        <label htmlFor="buyer">Buyer</label>

                        <input
                            id="seller"
                            name="role-account"
                            value="seller"
                            type="radio"
                        />
                        <label htmlFor="seller">Seller</label>
                    </section>

                    <section>
                        <a href="/login">Login Instead</a>
                        <CustomButton variant="default" onClick={undefined}>
                            Create Account
                        </CustomButton>
                    </section>
                </fieldset>
            </form>
        </>
    );
}
