import { Card } from '../../components/card/Card';
import { CardItem } from '../../components/card/card-other/CardItem';
import { CardSection } from '../../components/card/card-other/CardSection';
import { CardTitle } from '../../components/card/card-other/CardTitle';
import { CustomLink } from '../../components/shared/CustomLink';
import './not-found-style.scss';

// TODO: Create a TSX ErrorMessage component with proper feature to display error ?
// => Instead of using <Card>, it might be better to create a <Message> component for those cases.

export function NotFound() {
    return (
        <>
            <main className="main-notfound">
                {/* <h1 className="main-notfound__title">404 page</h1> */}

                <section className="main-notfound__content">
                    <Card>
                        <CardSection variant="characteristics">
                            <CardTitle>Error 404: Page not Found</CardTitle>
                            <CardItem variant="item">
                                We unfortunately couldn't find the page you are looking for.
                            </CardItem>
                            <CardItem variant="item">Did you check you were on the good URL ? </CardItem>

                            <CardItem variant="item">If you're unsure, we invite you to click the link below.</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <CustomLink variant="no-padding" to={'/'}>
                                Go back to Home
                            </CustomLink>
                        </CardSection>
                    </Card>
                </section>
            </main>
        </>
    );
}
