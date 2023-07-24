import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary";
    role?: string;
    text: string;
    icon?: ReactNode;
}

const commonStyle =
    "flex gap-[6px] justify-center items-center text-white pt-2 pb-[10px] pl-6 pr-6 rounded-full select-none my-2";

const btnVariants = {
    primary: "bg-slate-700 hover:bg-slate-500 active:bg-slate-300",
    secondary: "bg-red-700 hover:bg-red-500 active:bg-red-300 ",
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            role={props.role ? props.role : "button"}
            className={btnVariants[props.variant] + commonStyle}
            {...props}
        >
            <span className="mt-[2px]">{props.icon}</span>
            {props.text}
        </button>
    );
};
