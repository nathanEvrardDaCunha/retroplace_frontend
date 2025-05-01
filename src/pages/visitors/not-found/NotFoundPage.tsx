import { Card } from '../../../components/ui/Card';
import { CustomButton } from '../../../components/ui/CustomButton';
import { Layout } from '../../../layouts/Layout';
import { LayoutContent } from '../../../layouts/LayoutContent';
import { LayoutFooter } from '../../../layouts/LayoutFooter';
import { LayoutHeader } from '../../../layouts/LayoutHeader';

export function NotFoundPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <Card>
                    <h1> Not Found Page </h1>
                    <p>
                        Sorry, the page you are looking for does not exist. You
                        can go back to the home page by clicking the link below.
                    </p>

                    <CustomButton variant="link" to="/">
                        Go Home
                    </CustomButton>
                </Card>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
