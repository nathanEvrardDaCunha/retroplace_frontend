import { useParams } from 'react-router-dom';

export function BrowseAccountLogic() {
    const params = useParams();

    console.log(params.id);

    // TODO: Add a link that return to the previous page or home page.
    // TODO: Create a TSX ErrorMessage component with proper feature to display error ?
    // => Instead of using <Card>, it might be better to create a <Message> component for those cases.
    // => Or either redo the <Card> to be more modular, or, create another type of it specific for this case.
    // DESIGN: The admin should not be able to delete neither update is account for security reason.
    // => Only others, higher admins, can do so.
    // IDEA: Add a second verification to "delete account" to make sure it's not a missed click.
    // IDEA: Add Icon for each category.

    return (
        <>
            <strong>Account ID : {params.id ? params.id : 'undefined'}</strong>

            {/*
        // Only for customers (buyer and seller only).
        
        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Personal Information's</CardTitle>

                <CardItem variant="item">
                    Here reside the process to delete or update your account.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Delete Account</Button>
                <Button>Update Account</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Identity Certification</CardTitle>
                <CardItem variant="item">Here reside the process to verify you're a not a bot.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Certify Account</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Incident Reports</CardTitle>
                <CardItem variant="item">
                    Here reside all the anonymous report made about your displeasing behavior.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Report</Button>
            </CardSection>
        </Card> */}

            {/*                     
        //Only for the Buyer
        
        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Products Cart</CardTitle>
                <CardItem variant="item">
                    Here reside all the products you've saved to purchase in one go.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Cart</Button>
            </CardSection>
        </Card> 
        
        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Past Commands</CardTitle>
                <CardItem variant="item">
                    Here reside all the products you've already purchased in the past.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse History</Button>
            </CardSection>
        </Card> */}

            {/* 
        // Only for Seller

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Available Products</CardTitle>
                <CardItem variant="item">
                    Here reside all the products you sell which aren't reserved yet.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Available</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Reserved Products</CardTitle>
                <CardItem variant="item">
                    Here reside all the products you sell which are purchased and waiting for transport.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Reserved</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Past Commands</CardTitle>
                <CardItem variant="item">Here reside all the products you've sold in the past.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse History</Button>
            </CardSection>
        </Card> */}

            {/* Only the SuperAdmin should be able to modify and delete the admins */}
            {/* In "Reputation Review", Add Review for Seller and Buyers about each others */}

            {/* 
        //Only for Admins
        
        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Available Products</CardTitle>
                <CardItem variant="item">Here reside all the products available on the website.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Available</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Reserved Products</CardTitle>
                <CardItem variant="item">
                    Here reside all the products currently purchased and waiting for transport.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Reserved</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Past Commands</CardTitle>
                <CardItem variant="item">
                    Here reside all the products which've been sold in the past.
                </CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse History</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Users Account</CardTitle>
                <CardItem variant="item">Here reside all the users of the website.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Users</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Reputation Reviews</CardTitle>
                <CardItem variant="item">Here reside all the reviews made by users.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Reviews</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Sanction System</CardTitle>
                <CardItem variant="item">Here reside the process of banishment.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Banishments</Button>
            </CardSection>
        </Card>

        <Card>
            <CardSection variant="characteristics">
                <CardTitle>Financial Dashboard</CardTitle>
                <CardItem variant="item">Here reside the cashflow of the website.</CardItem>
            </CardSection>
            <CardSection variant="buttons">
                <Button>Browse Cashflow</Button>
            </CardSection>
        </Card> */}
        </>
    );
}
