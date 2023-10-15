import { FormHTMLAttributes } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    variant: "primary" | "secondary" | "tertiary";
}

export const Form = (props: Props) => {
    return (
        <form
            {...props}
            className={`flex flex-col bg-white rounded-lg drop-shadow-lg pt-5 px-5 pb-12 sm:w-96 gap-2 ${props.className}`}
        >
            {props.children}
        </form>
    );
};
