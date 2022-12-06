import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import { useForm } from "react-hook-form";
import { extractSpacingProps } from "@app/utils/layout";
import Button from "../common/Button";
interface Props {
  blok: any;
}
const FormSubmit: React.FC<Props> = React.memo(({ blok }) => {
  const {
    formState: { isSubmitting },
  } = useForm<any>();
  const spacingProps = extractSpacingProps(blok);
  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        ...spacingProps,
      }}
      className={cn("w-full flex justify-center")}
    >
      <Button
        disabled={isSubmitting}
        className={cn("bg-primary text-white font-bold py-3 px-4 w-full my-2")}
        type="submit"
      >
        <span>{blok.label}</span>
      </Button>
    </div>
  );
});
export default FormSubmit;
