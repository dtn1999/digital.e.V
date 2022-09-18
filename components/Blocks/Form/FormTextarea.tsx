import React from "react";
import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { BaseProps } from "@app/types";
import { FormTextareaFragment } from "@app/types/graphql";

interface Props
  extends BaseProps,
    Omit<Required<FormTextareaFragment>, "__typename" | "id" | "label"> {
  error?: any;
}

const FormTextarea: React.FC<Props> = React.memo(({ ...props }) => {
  const { label, placeholder, name, required } = props as any;
  const { register } = useFormContext();
  return (
    <textarea
      {...register(name, { required })}
      rows={4}
      placeholder={placeholder}
      className={cn(
        "focus:outline-none focus:border-black focus:rounded-none placeholder:text-black placeholder:font-light text-sm w-full py-3 px-4 border border-black mb-4"
      )}
    />
  );
});
export default FormTextarea;
