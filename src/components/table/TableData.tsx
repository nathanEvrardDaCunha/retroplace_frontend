import './table-style.scss';

interface TableDataProps {
    children: string | number | React.ReactNode;
}

export function TableData(props: TableDataProps) {
    return <td className="table__data">{props.children}</td>;
}
