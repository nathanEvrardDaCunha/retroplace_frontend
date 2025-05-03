import './table-style.scss';

interface TableBodyProps {
    children: React.ReactNode;
}

export function TableBody(props: TableBodyProps) {
    return <tbody className="table__body">{props.children}</tbody>;
}
