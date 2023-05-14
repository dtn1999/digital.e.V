import { BaseProps } from "@app/types";
import React from "react";
import { useFormContext } from "react-hook-form";
interface Props {
  blok: any;
}

interface CheckboxProps extends BaseProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormCheckbox: React.FC<CheckboxProps> = ({
  name,
  label,
  required,
  className,
}) => {
  const { register, getFieldState } = useFormContext();
  const { error, isDirty, isTouched } = getFieldState(name);
  if (!name) {
    return null;
  }
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center space-x-3">
        <input
          {...register(name, { required: required ? true : false })}
          type="checkbox"
          className="h-4 w-4 text-primary accent-primary focus:bg-primary"
        />
        <span>{label}</span>
      </div>
      {error && <p className="font-extralight text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormCheckbox;
