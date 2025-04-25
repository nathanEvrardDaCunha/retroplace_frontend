import './BrowseProduct.scss';

// IDEA: Separate into individual file "BrowseProduct", "FilterProduct" and "SortProduct".
// => Then merge them together, maybe in "ProductPage" ?

export function BrowseProduct() {
    // IDEA: Use "main" instead
    return (
        <main className="main">
            {/* // DESIGN: One section to filter the products.
        // => Console System, Type of Product (Video Game, Figurines, Consoles, Limited Edition Stuff...)... */}

            <section className="filter">
                <h2>Filter available products</h2>
            </section>

            {/* // DESIGN: One section to sort the products.
        // => By Age, By Used Quality, By Price... */}
            <section className="sort">
                <h2>Sort available products</h2>
            </section>

            {/* // DESIGN: One section to browse the remaining product. */}

            {/* TODO: Finish to style the button and make TSX Card components. */}
            <section className="browse">
                <h2 className="browse__title">Browse available products</h2>

                <section className="browse__products">
                    <article className="product">
                        <figure className="product__figure">
                            <img className="product__image" src="https://picsum.photos/499" alt="lorem picsum" />
                            <figcaption className="product__caption">Slightly Used Nintendo 3DS</figcaption>
                        </figure>

                        {/* IDEA: See to add a 0/5 rating information about the seller now or later. */}
                        <section className="product__characteristics">
                            <h4 className="product__title">Nintendo 3DS</h4>
                            <p className="product__characteristic">12/01/2013</p>
                            <p className="product__characteristic">Slightly Used</p>
                            <p className="product__characteristic">13.99€</p>
                        </section>

                        {/* TODO: Return to the product page */}
                        {/* IDEA: Allow users to report, on the detailed page, the product if it infringe our policy */}
                        <section className="product__buttons">
                            <button className="product_button">See More</button>
                        </section>
                    </article>

                    <article className="product">
                        <figure className="product__figure">
                            <img className="product__image" src="https://picsum.photos/500" alt="lorem picsum" />
                            <figcaption className="product__caption">Slightly Used Nintendo 3DS</figcaption>
                        </figure>

                        {/* IDEA: See to add a 0/5 rating information about the seller now or later. */}
                        <section className="product__characteristics">
                            <h4 className="product__title">Nintendo 3DS</h4>
                            <p className="product__characteristic">12/01/2013</p>
                            <p className="product__characteristic">Slightly Used</p>
                            <p className="product__characteristic">13.99€</p>
                        </section>

                        {/* TODO: Return to the product page */}
                        {/* IDEA: Allow users to report, on the detailed page, the product if it infringe our policy */}
                        <section className="product__buttons">
                            <button className="product_button">See More</button>
                        </section>
                    </article>

                    <article className="product">
                        <figure className="product__figure">
                            <img className="product__image" src="https://picsum.photos/501" alt="lorem picsum" />
                            <figcaption className="product__caption">Slightly Used Nintendo 3DS</figcaption>
                        </figure>

                        {/* IDEA: See to add a 0/5 rating information about the seller now or later. */}
                        <section className="product__characteristics">
                            <h4 className="product__title">Nintendo 3DS</h4>
                            <p className="product__characteristic">12/01/2013</p>
                            <p className="product__characteristic">Slightly Used</p>
                            <p className="product__characteristic">13.99€</p>
                        </section>

                        {/* TODO: Return to the product page */}
                        {/* IDEA: Allow users to report, on the detailed page, the product if it infringe our policy */}
                        <section className="product__buttons">
                            <button className="product_button">See More</button>
                        </section>
                    </article>

                    <article className="product">
                        <figure className="product__figure">
                            <img className="product__image" src="https://picsum.photos/502" alt="lorem picsum" />
                            <figcaption className="product__caption">Slightly Used Nintendo 3DS</figcaption>
                        </figure>

                        {/* IDEA: See to add a 0/5 rating information about the seller now or later. */}
                        <section className="product__characteristics">
                            <h4 className="product__title">Nintendo 3DS</h4>
                            <p className="product__characteristic">12/01/2013</p>
                            <p className="product__characteristic">Slightly Used</p>
                            <p className="product__characteristic">13.99€</p>
                        </section>

                        {/* TODO: Return to the product page */}
                        {/* IDEA: Allow users to report, on the detailed page, the product if it infringe our policy */}
                        <section className="product__buttons">
                            <button className="product_button">See More</button>
                        </section>
                    </article>

                    <article className="product">
                        <figure className="product__figure">
                            <img className="product__image" src="https://picsum.photos/503" alt="lorem picsum" />
                            <figcaption className="product__caption">Slightly Used Nintendo 3DS</figcaption>
                        </figure>

                        {/* IDEA: See to add a 0/5 rating information about the seller now or later. */}
                        <section className="product__characteristics">
                            <h4 className="product__title">Nintendo 3DS</h4>
                            <p className="product__characteristic">12/01/2013</p>
                            <p className="product__characteristic">Slightly Used</p>
                            <p className="product__characteristic">13.99€</p>
                        </section>

                        {/* TODO: Return to the product page */}
                        {/* IDEA: Allow users to report, on the detailed page, the product if it infringe our policy */}
                        <section className="product__buttons">
                            <button className="product_button">See More</button>
                        </section>
                    </article>
                </section>
            </section>
        </main>
    );
}
