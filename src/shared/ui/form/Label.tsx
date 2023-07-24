import { LabelHTMLAttributes } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    text: string;
}

export const Label = (props: Props) => {
    return (
        <label
            {...props}
            htmlFor={props.htmlFor}
            className="font-bold text-md text-slate-500 "
        >
            {props.text}
        </label>
    );
};
