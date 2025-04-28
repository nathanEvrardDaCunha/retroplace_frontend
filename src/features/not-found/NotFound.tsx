import './not-found-style.scss';

// TODO: Add a link that return to the previous page or home page.
// TODO: Create a TSX ErrorMessage component with proper feature to display error ?

export function NotFound() {
    return (
        <>
            <main className="main-notfound">
                <h1 className="main-notfound__title">Home presentation page</h1>

                <section className="main-notfound__content">
                    <p>Content</p>
                </section>
            </main>
        </>
    );
}
