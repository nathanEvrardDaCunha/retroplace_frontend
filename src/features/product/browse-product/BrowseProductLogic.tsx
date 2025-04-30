export function BrowseProductLogic() {
    // TODO: Implement procedural card generation logic but with fake data through data structure.
    // IDEA: Separate into individual file "BrowseProduct", "FilterProduct" and "SortProduct".
    // TODO: Implement one section to filter available product.
    // TODO: Implement one section to sort available product.
    // IDEA: See to add a 0/5 rating information about the seller now or later.
    // TODO: Make the product button Return to the product page.
    // IDEA: Allow users to report, on the detailed page, the product if it infringe our policy.
    // TODO: Implement formatter for the "" or ''
    // TODO: Add Filter features in another file
    // TODO: Add Sort features in another file

    return (
        <>
            <article>
                <figure>
                    <img src="https://picsum.photos/499" alt="lorem picsum" />
                    <figcaption>Brand New PlayStation 5</figcaption>
                </figure>

                <section>
                    <h3>PlayStation 5</h3>
                    <p>Price: 499.99€</p>
                    <p>Release Date: 11/12/2020</p>
                    <p>Condition: Brand New</p>
                </section>

                <section>
                    <button>See More</button>
                </section>
            </article>

            <article>
                <figure>
                    <img src="https://picsum.photos/500" alt="lorem picsum" />
                    <figcaption>Used Xbox Series X</figcaption>
                </figure>

                <section>
                    <h3>Xbox Series X</h3>
                    <p>Price: 399.99€</p>
                    <p>Release Date: 10/11/2020</p>
                    <p>Condition: Used</p>
                </section>

                <section>
                    <button>See More</button>
                </section>
            </article>

            <article>
                <figure>
                    <img src="https://picsum.photos/501" alt="lorem picsum" />
                    <figcaption>Refurbished Nintendo Switch</figcaption>
                </figure>

                <section>
                    <h3>Nintendo Switch</h3>
                    <p>Price: 299.99€</p>
                    <p>Release Date: 03/03/2017</p>
                    <p>Condition: Refurbished</p>
                </section>

                <section>
                    <button>See More</button>
                </section>
            </article>

            <article>
                <figure>
                    <img src="https://picsum.photos/502" alt="lorem picsum" />
                    <figcaption>Lightly Used Steam Deck</figcaption>
                </figure>

                <section>
                    <h3>Steam Deck</h3>
                    <p>Price: 549.99€</p>
                    <p>Release Date: 02/25/2022</p>
                    <p>Condition: Lightly Used</p>
                </section>

                <section>
                    <button>See More</button>
                </section>
            </article>

            <article>
                <figure>
                    <img src="https://picsum.photos/503" alt="lorem picsum" />
                    <figcaption>Brand New Oculus Quest 2</figcaption>
                </figure>

                <section>
                    <h3>Oculus Quest 2</h3>
                    <p>Price: 349.99€</p>
                    <p>Release Date: 10/13/2020</p>
                    <p>Condition: Brand New</p>
                </section>

                <section>
                    <button>See More</button>
                </section>
            </article>
        </>
    );
}
