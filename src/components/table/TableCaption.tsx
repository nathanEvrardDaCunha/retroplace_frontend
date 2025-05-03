import './table-style.scss';

interface TableCaptionProps {
    children: string;
}

export function TableCaption(props: TableCaptionProps) {
    return <caption className="table__caption">{props.children}</caption>;
}
