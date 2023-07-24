import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: "text" | "number" | "tel" | "email" | "password";
    label?: boolean;
    className?: string;
}

export const Input = (props: Props) => {
    // TODO: Capitalize label

    return (
        <>
            {props.label && <label htmlFor={props.id}>{props.id}</label>}
            <input
                {...props}
                name={props.id}
                id={props.id}
                type={props.type ? props.type : "text"}
                className={`bg-white border-[2px] focus:outline-none px-2 py-2 rounded-md
         ${props.className}`}
            />
        </>
    );
};
