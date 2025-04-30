export function LoginLogic() {
    function handleActionLogin(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    // TODO: When form is a success, redirect to personal-account page.
    // TODO: When form is a success, tell it to the user through a message.
    // TODO: Should indicate to user which fields are required before he submit for the first time.
    // TODO: When Backend implemented,  don't forget to implement an authentication system.
    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    return (
        <>
            <form action={handleActionLogin}>
                <fieldset>
                    <legend>Login</legend>

                    <section>
                        <label htmlFor="email-account">Email</label>
                        <p>Write down your email address.</p>
                        <input type="email" id="email-account" name="email-account" required />
                    </section>

                    <section>
                        <label htmlFor="password-account">Password</label>
                        <p>Write down your password.</p>
                        <input type="password" id="password-account" name="password-account" required />
                        <a href="/reset-password">Reset Password</a>
                    </section>

                    <section>
                        <a href="/register">Create Account</a>
                        <button type="submit">Submit</button>
                    </section>
                </fieldset>
            </form>
        </>
    );
}
