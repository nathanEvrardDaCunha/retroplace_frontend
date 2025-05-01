import { CustomButton } from '../../../components/ui/CustomButton';

export function ResetPasswordLogic() {
    function handleActionResetPassword(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    // TODO: When form is a success, redirect to login page.
    // TODO: When form is a success, tell it to the user through a message.
    // TODO: When Backend implemented,  don't forget to implement an authentication system.
    // TODO: When Backend implemented, don't forget to verify user data on the server instead of client.

    return (
        <>
            <form action={handleActionResetPassword}>
                <fieldset>
                    <legend>Reset Password</legend>

                    <section>
                        <label htmlFor="email-account">Email</label>
                        <p>Write down your email address.</p>
                        <input
                            type="email"
                            id="email-account"
                            name="email-account"
                            placeholder="gamer@gmail.com"
                            required
                        />
                    </section>

                    <section>
                        <CustomButton variant="default" onClick={undefined}>
                            Reset Password
                        </CustomButton>
                    </section>
                </fieldset>
            </form>
        </>
    );
}
