import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { useFormContext } from "react-hook-form";

interface FormSelectProps extends BaseProps {
  name: string;
  label?: string;
  required?: boolean;
  options: SelectOption[];
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  required,
  options,
  label,
  className,
}) => {
  const { register, getFieldState } = useFormContext();
  const { error, isDirty, isTouched } = getFieldState(name);
  if (!name) return null;
  return (
    <div className={cn("w-full flex flex-col")}>
      <label htmlFor={name} className="capitalize">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, { required: required ? true : false })}
        className={cn(
          "w-full focus:outline-none placeholder:text-black placeholder:font-light text-sm py-3 px-4 border border-black ml-0 my-2",
          className
        )}
      >
        {options.map((option, index) => (
          <FormSelectOption
            key={index}
            label={option.label}
            value={option.value}
          />
        ))}
      </select>
      {error && <p className="font-extralight text-red-500">{error.message}</p>}
    </div>
  );
};

interface SelectOption {
  label: string;
  value: string;
}

const FormSelectOption: React.FC<SelectOption> = React.memo(
  ({ label, value }) => {
    return <option value={value}>{label}</option>;
  }
);

export default FormSelect;
