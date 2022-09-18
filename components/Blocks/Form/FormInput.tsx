import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { FormInputFragment } from "@app/types/graphql";
import { useFormContext } from "react-hook-form";

interface Props
  extends BaseProps,
    Omit<Required<FormInputFragment>, "__typename" | "id" | "label"> {
  error?: any;
}

const FormInput: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { placeholder, name, required, type } = props;
  const { register } = useFormContext();

  return (
    <input
      {...register(name, { required: required ? true : false })}
      name={name}
      type={type?.toString().toLowerCase()}
      placeholder={placeholder || ""}
      className={cn(
        "focus:outline-none placeholder:text-black placeholder:font-light text-sm w-full py-3 px-4 border border-black mb-4",
        className
      )}
    />
  );
});
export default FormInput;
