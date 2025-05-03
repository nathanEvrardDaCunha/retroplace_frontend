import { Table } from '../../components/table/Table';
import { TableBody } from '../../components/table/TableBody';
import { TableCaption } from '../../components/table/TableCaption';
import { TableData } from '../../components/table/TableData';
import { TableFoot } from '../../components/table/TableFoot';
import { TableHead } from '../../components/table/TableHead';
import { TableHeading } from '../../components/table/TableHeading';
import { TableRow } from '../../components/table/TableRow';
import { Button } from '../../components/ui/Button';

export function BrowseUsersLogic() {
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
                        <TableHeading scope="col">Username</TableHeading>
                        <TableHeading scope="col">Creation Date</TableHeading>
                        <TableHeading scope="col">Role</TableHeading>
                        <TableHeading scope="col">Email</TableHeading>

                        <TableHeading scope="col">
                            Action Available
                        </TableHeading>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableHeading scope="row">NostalgicGamer</TableHeading>
                        <TableData>01/05/2024</TableData>
                        <TableData>Buyer</TableData>
                        <TableData>nostalgicgamer70@gmail.com</TableData>
                        <TableData>
                            <Button variant="default" onClick={undefined}>
                                Inspect Reports
                            </Button>
                            <Button variant="default" onClick={undefined}>
                                Inspect
                            </Button>
                            <Button variant="default" onClick={undefined}>
                                Update
                            </Button>
                            <Button variant="default" onClick={undefined}>
                                Delete
                            </Button>
                            <Button variant="default" onClick={undefined}>
                                Ban
                            </Button>
                        </TableData>
                    </TableRow>
                </TableBody>

                {/* IDEA: Update the tfoot dynamically later */}

                <TableFoot>
                    <TableRow>
                        <TableHeading scope="row" colSpan={5}>
                            Number of users
                        </TableHeading>
                        <TableHeading scope="row" colSpan={1}>
                            2
                        </TableHeading>
                    </TableRow>
                </TableFoot>
            </Table>
        </>
    );
}
