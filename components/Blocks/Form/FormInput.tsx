import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

const FormInput: React.FC<any> = React.memo(({ className, ...props }) => {
  const { placeholder, name, required, type } = props;
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full mx-2">
      <p className="font-medium">Vorname</p>
      <input
        {...register(name, { required: required ? true : false })}
        className="p-[10px] bg-[rgba(0,0,0,.04)] rounded-sm"
      />
    </div>
  );
});
export default FormInput;
