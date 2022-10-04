import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { BaseProps } from "../../../types/global";

interface Props extends BaseProps {
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
  type?: HTMLInputElement["type"];
}

const FormInput: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { placeholder, name, required, type, label } = props;
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full mx-2">
      <p className="font-medium">{label}</p>
      <input
        {...register(name, { required: required ? true : false })}
        placeholder={placeholder}
        type={type}
        className="p-[10px] bg-[rgba(0,0,0,.04)] rounded-sm focus:outline-1 outline-primary"
      />
    </div>
  );
});
export default FormInput;
