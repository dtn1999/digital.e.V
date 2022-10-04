import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

const FormTextarea: React.FC<any> = React.memo(({ ...props }) => {
  const { label, placeholder, name, required } = props as any;
  const { register } = useFormContext();
  return (
    <div className="mx-2">
      <p>Ihre Nachricht an uns</p>
      <textarea
        {...register(name, { required })}
        placeholder={placeholder}
        rows={5}
        className="w-full bg-[rgba(0,0,0,0.04)]"
      />
    </div>
  );
});
export default FormTextarea;
