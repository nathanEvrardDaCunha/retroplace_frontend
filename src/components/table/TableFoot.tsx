import './table-style.scss';

interface TableFootProps {
    children: React.ReactNode;
}

export function TableFoot(props: TableFootProps) {
    return <tfoot className="table__foot">{props.children}</tfoot>;
}
