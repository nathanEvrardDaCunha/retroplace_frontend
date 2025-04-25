import './layout-style.scss';

export function HeaderLayout() {
    // DESIGN: VISITOR need to be able to "Register", "Login" and "Browse" the products.

    // DESIGN: BUYER need to be able to "Disconnect", "Browse" cart, "Check" account and "Browse" the products.

    // DESIGN: SELLER need to be able to "Disconnect", "Browse" past command, "Check" account and "Browse" the products.

    // DESIGN: ADMIN need to be able to "Disconnect", "Manage" dashboards.

    // IDEA: Have a sidebar for desktop and burger menu for mobile ?

    return (
        <header className="header">
            <h2 className="header__title">Retroplace</h2>
            <button className="button__icon">X</button>
        </header>
    );
}
