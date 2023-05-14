import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { useFormContext } from "react-hook-form";

interface TextareaProps extends BaseProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  row?: number;
}

const FormTextarea: React.FC<TextareaProps> = ({
  name,
  label,
  placeholder,
  required,
  row,
  className,
}) => {
  const { register, getFieldState } = useFormContext();
  const { error, isDirty, isTouched } = getFieldState(name);
  if (!name) {
    return null;
  }
  return (
    <div className={cn("w-full flex flex-col")}>
      <label htmlFor={name} className="capitalize text-black">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...register(name, { required })}
        rows={4}
        placeholder={placeholder}
        className={cn(
          "w-full focus:outline-none focus:border-black focus:rounded-none placeholder:text-black placeholder:font-light text-sm py-3 px-4 border border-black my-2",
          className
        )}
      />
      {error && isTouched && (
        <p className="font-extralight text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default FormTextarea;
