import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Button from "../common/Button";
interface Props {
  blok: any;
}
const DynamicForm: React.FC<Props> = React.memo(({ blok }) => {
  const methods = useForm<any>();
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;
  const handleOnSubmit: SubmitHandler<any> = React.useCallback(async (data) => {
  }, []);
  return (
    <FormProvider {...methods}>
      <form
        {...storyblokEditable(blok)}
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        {blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </form>
    </FormProvider>
  );
});
export default DynamicForm;
