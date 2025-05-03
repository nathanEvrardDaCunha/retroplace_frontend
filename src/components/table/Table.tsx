import './table-style.scss';

interface TableProps {
    children: React.ReactNode;
}

export function Table(props: TableProps) {
    return <table className="table">{props.children}</table>;
}
