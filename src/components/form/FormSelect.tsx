import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { useFormContext } from "react-hook-form";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { extractSpacingProps } from "@app/utils/layout";

interface Props extends BaseProps {
  blok: any;
}
const FormSelect: React.FC<Props> = React.memo(({ className, blok }) => {
  const { name, required, options, fullWidth } = blok;
  const { register } = useFormContext();
  const styleProps = extractSpacingProps(blok);
  if (!name) return null;
  return (
    <select
      {...storyblokEditable(blok)}
      {...register(name, { required: required ? true : false })}
      style={{
        ...styleProps,
      }}
      className={cn(
        "focus:outline-none placeholder:text-black placeholder:font-light text-sm py-3 px-4 border border-black ml-0 my-2",
        {
          "w-full": fullWidth,
        },
        className
      )}
    >
      {options.map((option: any) => (
        <StoryblokComponent blok={option} key={option._uid} />
      ))}
    </select>
  );
});
export default FormSelect;
