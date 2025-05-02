import { CustomButton } from '../../components/ui/CustomButton';

export function BrowseProductLogic() {
    // TODO: Implement procedural card generation logic but with fake data through data structure.

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
                    <p>Seller: ⭐⭐⭐★★</p>
                </section>

                <section>
                    <CustomButton variant="destructive" onClick={undefined}>
                        Report Product
                    </CustomButton>
                    <CustomButton variant="outline" onClick={undefined}>
                        See More
                    </CustomButton>
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
                    <p>Seller: ⭐⭐⭐⭐⭐</p>
                </section>

                <section>
                    <CustomButton variant="destructive" onClick={undefined}>
                        Report Product
                    </CustomButton>
                    <CustomButton variant="outline" onClick={undefined}>
                        See More
                    </CustomButton>
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
                    <p>Seller: ⭐★★★★</p>
                </section>

                <section>
                    <CustomButton variant="destructive" onClick={undefined}>
                        Report Product
                    </CustomButton>
                    <CustomButton variant="outline" onClick={undefined}>
                        See More
                    </CustomButton>
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
                    <p>Seller: ⭐⭐★★★</p>
                </section>

                <section>
                    <CustomButton variant="destructive" onClick={undefined}>
                        Report Product
                    </CustomButton>
                    <CustomButton variant="outline" onClick={undefined}>
                        See More
                    </CustomButton>
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
                    <p>Seller: ⭐⭐⭐⭐★</p>
                </section>

                <section>
                    <CustomButton variant="destructive" onClick={undefined}>
                        Report Product
                    </CustomButton>
                    <CustomButton variant="outline" onClick={undefined}>
                        See More
                    </CustomButton>
                </section>
            </article>
        </>
    );
}
