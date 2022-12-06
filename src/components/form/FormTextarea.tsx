import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { useFormContext } from "react-hook-form";
import { extractSpacingProps } from "@app/utils/layout";
interface Props extends BaseProps {
  blok: any;
}
const FormTextarea: React.FC<Props> = React.memo(({ blok }) => {
  const { fullWidth, label, placeholder, name, required } = blok as any;
  const { register } = useFormContext();
  const styleProps = extractSpacingProps(blok);
  if (!name) {
    return null;
  }
  return (
    <textarea
      style={{
        ...styleProps,
      }}
      {...register(name, { required })}
      rows={4}
      placeholder={placeholder}
      className={cn(
        "focus:outline-none focus:border-black focus:rounded-none placeholder:text-black placeholder:font-light text-sm py-3 px-4 border border-black my-2",
        {
          "w-full": fullWidth,
        }
      )}
    />
  );
});
export default FormTextarea;
