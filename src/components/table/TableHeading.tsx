import './table-style.scss';

interface TableHeadingProps {
    children: string;
    scope?: 'row' | 'col';
    colSpan?: number;
}

export function TableHeading(props: TableHeadingProps) {
    const tableScope = props.scope === undefined ? 'row' : props.scope;
    const tableColSpan = props.colSpan === undefined ? 1 : props.colSpan;

    return (
        <th
            className="table__heading"
            scope={tableScope}
            colSpan={tableColSpan}
        >
            {props.children}
        </th>
    );
}
