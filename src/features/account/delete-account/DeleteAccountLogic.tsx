export function DeleteAccountLogic() {
    function handleActionDeleteAccount(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    // TODO: Make the warning message style destructive
    // TODO: Make the warning button style destructive

    return (
        <>
            <form action={handleActionDeleteAccount}>
                <fieldset>
                    <legend>Delete Account</legend>

                    <p>This action is permanent and won't be solvable after.</p>

                    <section>
                        <label htmlFor="delete-email">Email</label>
                        <p>Write down your email address.</p>
                        <input type="email" id="delete-email" name="delete-email" required />
                    </section>

                    <section>
                        <label htmlFor="delete-password">Password</label>
                        <p>Write down your password.</p>
                        <input type="password" id="delete-password" name="delete-password" required />
                    </section>

                    <section>
                        <button type="submit">Delete Account</button>
                    </section>
                </fieldset>
            </form>
        </>
    );
}
