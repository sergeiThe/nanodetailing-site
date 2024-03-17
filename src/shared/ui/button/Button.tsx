import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  role?: string;
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const commonStyle =
  "flex gap-[6px] justify-center items-center  pt-2 pb-[10px] pl-6 pr-8  select-none my-2 rounded-lg";

const btnVariants = {
  primary:
    "bg-red-700 hover:bg-red-500 active:bg-red-300 text-white hover:shadow-lg hover:shadow-slate-500 ",
  secondary:
    "bg-slate-700 hover:bg-slate-500 active:bg-slate-300 text-white hover:shadow-lg hover:shadow-slate-500 ",
  disabled: "bg-slate-100 text-black",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      role={props.role ? props.role : "button"}
      className={
        btnVariants[!props.disabled ? props.variant : "disabled"] + commonStyle
      }
      {...props}
    >
      <span className="mt-[2px]">{props.icon}</span>
      {props.text}
    </button>
  );
};
