import React from "react";
import cn from "classnames";
import { BaseProps } from "../../types/global";

type Theme = "Primary" | "Secondary";

interface Props
  extends BaseProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  variant?: "solid" | "outline" | "ghost";
  theme?: Theme;
}

export const LinkComponent: React.FC<Props> = React.memo(({ children, ...props }) => {
  return <React.Fragment>{children}</React.Fragment>;
});


const Button: React.FC<Props> = React.memo(
  ({ children, variant, disabled, className, onClick, type, ...rest }) => {
    return (
      <button
        {...rest}
        type={type}
        onClick={onClick}
        className={cn(
          {
            "whitespace-nowrap flex justify-center items-center border px-5 py-3 leading-5 outline-none lg:text-sm xl:text-xs font-normal uppercase first-letter:uppercase cursor-pointer duration-700 group hover:decoration-0 border-primary":
              true,
            "bg-transparent text-black hover:bg-primary hover:text-white hover:border-transparent":
              variant && variant === "outline" && !disabled,
            "bg-primary text-white border-transparent hover:bg-primary-hover":
              variant === "solid",
            "opacity-50 cursor-not-allowed bg-gray-600": disabled,
          },
          className
        )}
      >
        {" "}
        {children}{" "}
      </button>
    );
  }
);
export default Button;
