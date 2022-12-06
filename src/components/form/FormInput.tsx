import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { useFormContext } from "react-hook-form";
import { storyblokEditable } from "@storyblok/react";
import { FaUnderline } from "react-icons/fa";
import { extractSpacingProps } from "@app/utils/layout";

interface Props extends BaseProps {
  blok: any;
}
const FormInput: React.FC<Props> = React.memo(({ className, blok }) => {
  const { placeholder, name, required, type, width, height, fullWidth } = blok;
  const { register } = useFormContext();
  const styleProps = extractSpacingProps(blok);

  if (!name) {
    return null;
  }

  return (
    <input
      style={{
        ...styleProps,
        width: Number(width) || undefined,
        height: Number(height) || undefined,
      }}
      {...storyblokEditable(blok)}
      {...register(name, { required: required ? true : false })}
      name={name}
      type={type?.toString().toLowerCase()}
      placeholder={placeholder || ""}
      className={cn(
        "focus:outline-none placeholder:text-black placeholder:font-light text-sm py-3 px-4 border border-black my-2",
        {
          "w-full": fullWidth,
        },
        className
      )}
    />
  );
});
export default FormInput;
