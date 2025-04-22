interface FormLegendProps {
    children: React.ReactNode;
}

export function FormLegend(props: FormLegendProps) {
    return <legend>{props.children}</legend>;
}
