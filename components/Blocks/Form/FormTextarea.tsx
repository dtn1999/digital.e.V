import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { BaseProps } from "../../../types/global";

interface Props extends BaseProps {
  label?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  type?: HTMLInputElement["type"];
}

const FormTextarea: React.FC<Props> = React.memo(({ ...props }) => {
  const { label, placeholder, name, required } = props;
  const { register } = useFormContext();
  return (
    <div className="mx-2 mt-4 ">
      <p>{label}</p>
      <textarea
        {...register(name, { required })}
        placeholder={placeholder}
        rows={5}
        className="w-full bg-[rgba(0,0,0,0.04)] focus:outline-1 outline-primary"
      />
    </div>
  );
});
export default FormTextarea;
