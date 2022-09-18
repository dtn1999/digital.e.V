import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

const FormInput: React.FC<any> = React.memo(({ className, ...props }) => {
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
