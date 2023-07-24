import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "tertiary";
    role?: string;
    text: string;
    icon?: ReactNode;
}

const btnVariants = {
    primary:
        "flex gap-[6px] justify-center items-center bg-slate-700 hover:bg-slate-500 active:bg-slate-300 text-white font-bold pt-1 pb-2 pl-4 pr-5 rounded-full select-none",
    secondary:
        "flex gap-[6px] justify-center items-center bg-red-700 hover:bg-red-500 active:bg-red-300 text-white font-bold pt-1 pb-2 pl-4 pr-5 rounded-full select-none",
    tertiary:
        "flex gap-[6px] justify-center items-center bg-white hover:bg-slate-100 active:bg-slate-300 font-bold pt-1 pb-2 pl-4 pr-5 rounded-full select-none",
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            role={props.role ? props.role : "button"}
            className={btnVariants[props.variant]}
            {...props}
        >
            <span className="mt-[2px]">{props.icon}</span>
            {props.text}
        </button>
    );
};
