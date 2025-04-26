import { Card } from '../components/card/Card';
import { CardItem } from '../components/card/CardItem';
import { CardSection } from '../components/card/CardSection';
import { CardTitle } from '../components/card/CardTitle';
import { CardFigCaption } from '../components/card/figures/CardFigCaption';
import { CardFigure } from '../components/card/figures/CardFigure';
import { CardImage } from '../components/card/figures/CardImage';
import { Button } from '../components/shared/Button';
import './BrowseProduct.scss';

// TODO: Implement procedural card generation logic but with fake data through data structure.

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
            {/* IDEA: See to add a 0/5 rating information about the seller now or later. */}
            {/* TODO: Make the product button Return to the product page */}

            {/* IDEA: Allow users to report, on the detailed page, the product if it infringe our policy */}
            {/* TODO: Implement formatter for the "" or '' */}

            {/* TODO: Finish to style the button and make TSX Card components. */}
            <section className="browse">
                <h2 className="browse__title">Browse available products</h2>

                <section className="browse__products">
                    <Card>
                        <CardFigure>
                            <CardImage src={'https://picsum.photos/499'} alt={'lorem picsum'} />
                            <CardFigCaption>Slightly Used Nintendo 3DS</CardFigCaption>
                        </CardFigure>

                        <CardSection variant="characteristics">
                            <CardTitle>Nintendo 3DS</CardTitle>
                            <CardItem variant="price">13.99€</CardItem>
                            <CardItem variant="item">12/01/2013</CardItem>
                            <CardItem variant="item">Slightly Used</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <Button>See More</Button>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardFigure>
                            <CardImage src="https://picsum.photos/500" alt="lorem picsum" />
                            <CardFigCaption>Slightly Used Nintendo 3DS</CardFigCaption>
                        </CardFigure>

                        <CardSection variant="characteristics">
                            <CardTitle>Nintendo 3DS</CardTitle>
                            <CardItem variant="price">13.99€</CardItem>
                            <CardItem variant="item">12/01/2013</CardItem>
                            <CardItem variant="item">Slightly Used</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <Button>See More</Button>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardFigure>
                            <CardImage src="https://picsum.photos/501" alt="lorem picsum" />
                            <CardFigCaption>Slightly Used Nintendo 3DS</CardFigCaption>
                        </CardFigure>

                        <CardSection variant="characteristics">
                            <CardTitle>Nintendo 3DS</CardTitle>
                            <CardItem variant="price">13.99€</CardItem>
                            <CardItem variant="item">12/01/2013</CardItem>
                            <CardItem variant="item">Slightly Used</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <Button>See More</Button>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardFigure>
                            <CardImage src="https://picsum.photos/502" alt="lorem picsum" />
                            <CardFigCaption>Slightly Used Nintendo 3DS</CardFigCaption>
                        </CardFigure>

                        <CardSection variant="characteristics">
                            <CardTitle>Nintendo 3DS</CardTitle>
                            <CardItem variant="price">13.99€</CardItem>
                            <CardItem variant="item">12/01/2013</CardItem>
                            <CardItem variant="item">Slightly Used</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <Button>See More</Button>
                        </CardSection>
                    </Card>

                    <Card>
                        <CardFigure>
                            <CardImage src="https://picsum.photos/503" alt="lorem picsum" />
                            <CardFigCaption>Slightly Used Nintendo 3DS</CardFigCaption>
                        </CardFigure>

                        <CardSection variant="characteristics">
                            <CardTitle>Nintendo 3DS</CardTitle>
                            <CardItem variant="price">13.99€</CardItem>
                            <CardItem variant="item">12/01/2013</CardItem>
                            <CardItem variant="item">Slightly Used</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <Button>See More</Button>
                        </CardSection>
                    </Card>
                </section>
            </section>
        </main>
    );
}
