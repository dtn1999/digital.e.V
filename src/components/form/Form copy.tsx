import React from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

import { BaseProps } from "@app/types";

interface FormProps extends BaseProps {
  methods: UseFormReturn<any, any>;
  onSubmit: SubmitHandler<any>;
}

export const Form: React.FC<FormProps> = ({ methods, children, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
