import './table-style.scss';

interface TableDataProps {
    children: string | number;
}

export function TableData(props: TableDataProps) {
    return <td className="table__data">{props.children}</td>;
}
