import './table-style.scss';

interface TableRowProps {
    children: React.ReactNode;
}

export function TableRow(props: TableRowProps) {
    return <tr className="table__row">{props.children}</tr>;
}
