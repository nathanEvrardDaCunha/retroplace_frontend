interface FormLegendProps {
    children: string;
}

export function FormLegend(props: FormLegendProps) {
    return <legend className="form__legend">{props.children}</legend>;
}
