import { extractSpacingProps } from "@app/utils/layout";
import { storyblokEditable } from "@storyblok/react";
import React from "react";
import { useFormContext } from "react-hook-form";
interface Props {
  blok: any;
}

const FormCheckbox: React.FC<Props> = React.memo(({ blok }) => {
  const { label, name, required, type } = blok;
  const { register } = useFormContext();
  const styleProps = extractSpacingProps(blok);

  if (!name) {
    return null;
  }
  return (
    <div className="inline-flex items-center space-x-3">
      <input
        style={{
          ...styleProps,
        }}
        {...storyblokEditable(blok)}
        {...register(name, { required: required ? true : false })}
        type="checkbox"
        className="h-4 w-4 text-primary accent-primary focus:bg-primary"
      />
      <span>{label}</span>
    </div>
  );
});

export default FormCheckbox;
