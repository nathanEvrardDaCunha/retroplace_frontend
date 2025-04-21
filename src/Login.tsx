export function Login() {
    // TODO: When Backend implemented,  don't forget to implement an authentication system.

    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    // TODO: Should indicate to user which fields are required before he submit for the first time.

    return (
        <form className="test">
            <fieldset>
                <legend>Log In to your Account</legend>

                <label>Email</label>
                <input type="email" placeholder="john.doe@gmail.com" inputMode="email" required />

                <label>Password</label>
                <input type="password" placeholder="**************" inputMode="text" required />

                <button>Log In</button>
                <button>Sign Up</button>
                <button>Reset Password</button>
            </fieldset>
        </form>
    );
}
