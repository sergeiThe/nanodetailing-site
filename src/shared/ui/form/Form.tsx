import { FormHTMLAttributes } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    variant: "primary" | "secondary" | "tertiary";
}

export const Form = (props: Props) => {
    return (
        <form
            {...props}
            className={`flex flex-col bg-white rounded-lg drop-shadow-lg pt-5 px-8 pb-12 w-96 gap-2 ${props.className}`}
        >
            {props.children}
        </form>
    );
};
