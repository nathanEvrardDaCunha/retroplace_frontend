import { CustomButton } from '../../../components/ui/CustomButton';

export function UpdateAccountLogic() {
    function handleActionUpdateAccount(formData: FormData) {
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }

    return (
        <>
            <form action={handleActionUpdateAccount}>
                <fieldset>
                    <legend>Update Account</legend>

                    <section>
                        <label htmlFor="update-username">Username</label>
                        <p>Write down your new username.</p>
                        <input
                            type="text"
                            id="update-username"
                            name="update-username"
                            placeholder="NostalgicBuyer73"
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="update-email">Email</label>
                        <p>Write down your new email address.</p>
                        <input
                            type="email"
                            id="update-email"
                            name="update-email"
                            required
                        />
                    </section>

                    <section>
                        <label htmlFor="update-password">Password</label>
                        <p>Write down your new password.</p>
                        <input
                            type="password"
                            id="update-password"
                            name="update-password"
                            required
                        />
                    </section>

                    <section>
                        <CustomButton variant="outline" onClick={undefined}>
                            Update Account
                        </CustomButton>
                    </section>
                </fieldset>
            </form>
        </>
    );
}
