interface FormLegendProps {
    children: string;
}

export function FormLegend(props: FormLegendProps) {
    return <legend>{props.children}</legend>;
}
