import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { CardItem } from '../../components/card/card-other/CardItem';
import { CardSection } from '../../components/card/card-other/CardSection';
import { CardTitle } from '../../components/card/card-other/CardTitle';
import { Button } from '../../components/shared/Button';

import './browse-seller-account.scss';

// TODO: Add a link that return to the previous page or home page.
// TODO: Create a TSX ErrorMessage component with proper feature to display error ?
// => Instead of using <Card>, it might be better to create a <Message> component for those cases.

export function BrowseSellerAccount() {
    const params = useParams();

    console.log(params.id);

    return (
        <>
            <main className="main-browse-seller">
                {/* <h1 className="main-browse-seller__title">404 page</h1> */}

                <section className="main-browse-seller__content">
                    <Card>
                        <CardSection variant="characteristics">
                            <CardTitle>Seller </CardTitle>
                            <strong>ID route : {params.id ? params.id : 'undefined'}</strong>
                            <CardItem variant="item">
                                We unfortunately couldn't find the page you are looking for.
                            </CardItem>
                            <CardItem variant="item">Did you check you were on the good URL ? </CardItem>

                            <CardItem variant="item">If you're unsure, we invite you to the home page.</CardItem>
                        </CardSection>

                        <CardSection variant="buttons">
                            <Button>Go Home</Button>
                        </CardSection>
                    </Card>
                </section>
            </main>
        </>
    );
}
