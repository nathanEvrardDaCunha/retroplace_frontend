import { useParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomSection } from '../../components/ui/CustomSection';

export function BrowseAccountLogic() {
    const params = useParams();

    console.log(params.id);

    // IDEA: Enum for the roles
    const staticUserRole = 'seller';

    // TODO: Add a link that return to the previous page or home page.
    // DESIGN: Admin shouldn't be allowed to update and delete their colleagues.
    // IDEA: Add Icon for each category.

    return (
        <>
            <strong>Account ID : {params.id ? params.id : 'undefined'}</strong>

            <CustomHeading variant="h1" style="h1">
                Account
            </CustomHeading>

            {staticUserRole === 'buyer' ? (
                <>
                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Products Cart
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products you've saved in
                                your cart to purchase later.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/account-cart/${params.id}`}
                            >
                                Browse Cart
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Past Commands
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products you've already
                                purchased in the past.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/account-history/${params.id}`}
                            >
                                Browse History
                            </Button>
                        </CustomSection>
                    </CustomSection>
                </>
            ) : null}

            {staticUserRole === 'seller' || staticUserRole === 'buyer' ? (
                <>
                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Personal Information
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside the process to delete or update your
                                account.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/account-modification/${params.id}`}
                            >
                                Access Information
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Identity Certification
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside the process to verify you're not a
                                bot.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/account-certification/${params.id}`}
                            >
                                Certify Account
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Incident Reports
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the anonymous reports made about
                                your displeasing behavior.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/account-reports/${params.id}`}
                            >
                                Browse Reports
                            </Button>
                        </CustomSection>
                    </CustomSection>
                </>
            ) : null}

            {staticUserRole === 'seller' ? (
                <>
                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Available Products
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products you sell which
                                aren't reserved yet.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/seller-available/${params.id}`}
                            >
                                Browse Available
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Reserved Products
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products you sell which are
                                purchased and waiting for transport.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/seller-reserved/${params.id}`}
                            >
                                Browse Reserved
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Past Commands
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products you've sold in the
                                past.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/seller-history/${params.id}`}
                            >
                                Browse History
                            </Button>
                        </CustomSection>
                    </CustomSection>
                </>
            ) : null}

            {/* Only the SuperAdmin should be able to modify and delete the admins */}
            {/* In "Reputation Review", Add Review for Seller and Buyers about each others */}

            {staticUserRole === 'admin' || staticUserRole === 'root' ? (
                <>
                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Available Products
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products available on the
                                website.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-available/${params.id}`}
                            >
                                Browse Available
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Reserved Products
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products currently purchased
                                and waiting for transport.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-reserved/${params.id}`}
                            >
                                Browse Reserved
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Past Commands
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the products which've been sold
                                in the past.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-history/${params.id}`}
                            >
                                Browse History
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Users Account
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the users of the website.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-users/${params.id}`}
                            >
                                Browse Users
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Reputation Reviews
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside all the reviews made by users.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-reviews/${params.id}`}
                            >
                                Browse Reviews
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Sanction System
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside the process of banishment.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-sanctions/${params.id}`}
                            >
                                Browse Sanctions
                            </Button>
                        </CustomSection>
                    </CustomSection>

                    <CustomSection variant="article" style="column">
                        <CustomSection variant="section" style="column">
                            <CustomHeading variant="h4" style="h2">
                                Financial Dashboard
                            </CustomHeading>
                            <CustomHeading variant="p" style="p">
                                Here reside the cashflow of the website.
                            </CustomHeading>
                        </CustomSection>
                        <CustomSection variant="section" style="row">
                            <Button
                                variant="link"
                                to={`/admin-financial/${params.id}`}
                            >
                                Browse Cashflow
                            </Button>
                        </CustomSection>
                    </CustomSection>
                </>
            ) : null}
        </>
    );
}
