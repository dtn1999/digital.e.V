import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import Link from "next/link";
import { useRouter } from "next/router";

type Theme = "Primary" | "Secondary";

interface Props extends BaseProps {
  variant?: any;
  theme?: Theme;
  disabled?: boolean;
  href?: any;
  type?: any;
  onClick?: () => void;
}

const Button: React.FC<Props> = React.memo(
  ({ href, disabled, variant, className, children, type, onClick }) => {
    const router = useRouter();
    const handleNavigation = React.useCallback(() => {
      if (href) {
        router.push(href.cached_url);
      }
    }, [router, href]);
    const renderChildren = () => {
      if (href) {
        <Link href={href.cached_url} as={href.as}>
          <a>{children}</a>
        </Link>;
      }
      return <React.Fragment>{children}</React.Fragment>;
    };

    return (
      <div
        //type={type || "button"}
        // onClick={onClick}
        onClick={handleNavigation}
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
        {renderChildren()}
      </div>
    );
  }
);
export default Button;
