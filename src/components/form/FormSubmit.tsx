import React from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { BaseProps } from "@app/types";
import { LoadingDots } from "src/components/common/LoadingDots";
import ReactIconsLoader from "src/components/common/ReactIconsLoader";

interface SubmitButtonProps extends BaseProps {
  label: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: string;
}

const FormSubmit: React.FC<SubmitButtonProps> = ({
  className,
  label,
  onClick,
  loading,
  icon,
}) => {
  const { formState } = useForm<any>();
  const { isSubmitting, isValid } = formState;
  console.log("formState", formState);
  return (
    <button
      onClick={onClick}
      className={cn(
        {
          "whitespace-nowrap flex justify-center items-center border px-5 py-3 leading-5 outline-none lg:text-sm xl:text-xs font-normal uppercase first-letter:uppercase cursor-pointer duration-700 group hover:decoration-0 border-primary":
            true,
          "bg-primary text-white border-transparent hover:bg-primary-hover":
            true,
          "bg-black opacity-60 cursor-not-allowed border-black hover:bg-black hover:opacity-60":
            loading || isSubmitting || !isValid,
        },
        className
      )}
      type="submit"
    >
      {icon && <ReactIconsLoader icon={icon} className="mx-2" />}
      <span>{label}</span>
      {loading && (
        <i className="m-0 flex pl-2">
          <LoadingDots />
        </i>
      )}
    </button>
  );
};
export default FormSubmit;
