import { Table } from '../../components/table/Table';
import { TableBody } from '../../components/table/TableBody';
import { TableCaption } from '../../components/table/TableCaption';
import { TableData } from '../../components/table/TableData';
import { TableFoot } from '../../components/table/TableFoot';
import { TableHead } from '../../components/table/TableHead';
import { TableHeading } from '../../components/table/TableHeading';
import { TableRow } from '../../components/table/TableRow';

export function BrowseAccountReportsLogic() {
    // IDEA: Table of reports (whereReported, whenReported, whyReported, statusOfReport, whatIsReported)

    // TODO: Make the possibility to appeal block after one usage for each report to avoid user spamming appeal.
    // TODO: Make the "Subject of Report" a dropdown list with a "Other" at the end somewhere

    // IDEA: Allow user to filter and sort the reports based on many criteria (date, role, status...)

    // TODO: Report Message should not possess more than 300 characters to avoid breaking the layout on desktop

    // IDEA: Could replace some data by color badge ?
    return (
        <>
            <Table>
                <TableCaption>Dashboard Reports</TableCaption>

                <TableHead>
                    <TableRow>
                        <TableHeading scope="col">
                            Subject of Report
                        </TableHeading>
                        <TableHeading scope="col">Date of Report</TableHeading>
                        <TableHeading scope="col">
                            Reason of Report
                        </TableHeading>
                        <TableHeading scope="col">
                            Status of Report
                        </TableHeading>
                        <TableHeading scope="col">
                            Role of Reporter
                        </TableHeading>
                        <TableHeading scope="col">
                            Action Available
                        </TableHeading>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableHeading scope="row">Behavior</TableHeading>
                        <TableData>09/07/2023</TableData>
                        <TableData>
                            REPORT MESSAGE SHOULD NOT BE MORE THAN X NUMBERS OF
                            CHARACTERS ! REPORT MESSAGE SHOULD NOT BE MORE THAN
                            X NUMBERS OF CHARACTERS ! REPORT MESSAGE SHOULD NOT
                            BE MORE THAN X NUMBERS OF CHARACTERS !
                        </TableData>
                        <TableData>Appeal Available</TableData>
                        <TableData>Seller</TableData>
                        <td>
                            <button>Appeal</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">Spam</TableHeading>
                        <TableData>08/15/2023</TableData>
                        <TableData>
                            This user has been sending me unsolicited messages
                            promoting their products, even after I asked them to
                            stop multiple times.
                        </TableData>
                        <TableData>Under Review</TableData>
                        <TableData>Buyer</TableData>
                        <td>
                            <button disabled={true}>Appeal</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">Fraud</TableHeading>
                        <TableData>07/22/2023</TableData>
                        <TableData>
                            The user sold me a product that was completely
                            different from the description and refused to
                            provide a refund.
                        </TableData>
                        <TableData>Resolved</TableData>
                        <TableData>Buyer</TableData>
                        <td>
                            <button disabled={true}>Appeal</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">Harassment</TableHeading>
                        <TableData>06/30/2023</TableData>
                        <TableData>
                            This user has been sending me offensive and
                            inappropriate messages after I declined their offer.
                        </TableData>
                        <TableData>Appeal Denied</TableData>
                        <TableData>Seller</TableData>
                        <td>
                            <button disabled={true}>Appeal</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">
                            Misleading Information
                        </TableHeading>
                        <TableData>05/18/2023</TableData>
                        <TableData>
                            The user provided false information about the
                            product's condition, leading to a dispute after the
                            purchase.
                        </TableData>
                        <TableData>Pending</TableData>
                        <TableData>Buyer</TableData>
                        <td>
                            <button disabled={true}>Appeal</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">null</TableHeading>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <td>
                            <button disabled={true}>null</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">null</TableHeading>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <td>
                            <button disabled={true}>null</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">null</TableHeading>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <td>
                            <button disabled={true}>null</button>
                        </td>
                    </TableRow>
                    <TableRow>
                        <TableHeading scope="row">null</TableHeading>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <TableData>null</TableData>
                        <td>
                            <button disabled={true}>null</button>
                        </td>
                    </TableRow>
                </TableBody>

                {/* IDEA: Update the tfoot dynamically later */}

                <TableFoot>
                    <TableRow>
                        <TableHeading scope="row" colSpan={5}>
                            Number of reports
                        </TableHeading>
                        <TableHeading scope="row" colSpan={1}>
                            5
                        </TableHeading>
                    </TableRow>
                </TableFoot>
            </Table>
        </>
    );
}
