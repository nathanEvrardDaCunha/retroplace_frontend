import './table-style.scss';

interface TableHeadProps {
    children: React.ReactNode;
}

export function TableHead(props: TableHeadProps) {
    return <thead className="table__head">{props.children}</thead>;
}
