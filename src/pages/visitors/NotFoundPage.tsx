// IDEA: Might replace this by a custom "Message" component

import { CustomButton } from '../../components/ui/CustomButton';
import { CustomHeading } from '../../components/ui/CustomHeading';
import { CustomSection } from '../../components/ui/CustomSection';
import { Layout } from '../../layouts/Layout';
import { LayoutContent } from '../../layouts/LayoutContent';
import { LayoutFooter } from '../../layouts/LayoutFooter';
import { LayoutHeader } from '../../layouts/LayoutHeader';

export function NotFoundPage() {
    return (
        <Layout>
            <LayoutHeader />
            <LayoutContent>
                <CustomSection variant="article" style="column">
                    <CustomHeading variant="h1" style="h2">
                        Page not Found
                    </CustomHeading>

                    <CustomHeading variant="p" style="p">
                        Sorry, the page you are looking for does not exist. You
                        can go back to the home page by clicking the link below.
                    </CustomHeading>

                    <CustomButton variant="link" to="/">
                        Go Home
                    </CustomButton>
                </CustomSection>
            </LayoutContent>
            <LayoutFooter />
        </Layout>
    );
}
