import { Card } from '../../components/card/Card';
import { CardItem } from '../../components/card/card-other/CardItem';
import { CardSection } from '../../components/card/card-other/CardSection';
import { CardTitle } from '../../components/card/card-other/CardTitle';
import { CardFigCaption } from '../../components/card/card-figure/CardFigCaption';
import { CardFigure } from '../../components/card/card-figure/CardFigure';
import { CardImage } from '../../components/card/card-figure/CardImage';
import { Button } from '../../components/shared/Button';

import './browse-products-style.scss';

// TODO: Implement procedural card generation logic but with fake data through data structure.
// IDEA: Separate into individual file "BrowseProduct", "FilterProduct" and "SortProduct".
// TODO: Implement one section to filter available product.
// TODO: Implement one section to sort available product.
// IDEA: See to add a 0/5 rating information about the seller now or later.
// TODO: Make the product button Return to the product page.
// IDEA: Allow users to report, on the detailed page, the product if it infringe our policy.
// TODO: Implement formatter for the "" or ''

export function BrowseProduct() {
    return (
        <>
            {/* <aside>
                <section className="filter">
                    <h2>Filter available products</h2>
                </section>

                <section className="sort">
                    <h2>Sort available products</h2>
                </section>
            </aside> */}

            <main className="main-products">
                <h1 className="main-products__title">Browse available products</h1>

                <section className="main-products__content">
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
            </main>
        </>
    );
}
