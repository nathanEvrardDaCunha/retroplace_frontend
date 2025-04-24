import './form-style.scss';

interface FormLegendProps {
    children: React.ReactNode;
}

export function FormLegend(props: FormLegendProps) {
    return <legend className="form__legend">{props.children}</legend>;
}
