import React from "react";
import FormFieldSwitcher from "@app/components/Form/FormRenderer";
import { FormFragment } from "@app/types/graphql";
import { FieldErrorsImpl, SubmitHandler } from "react-hook-form";

interface UseDynamicFormParams {
  fields: Required<FormFragment["fields"][number]>[];
  errors: FieldErrorsImpl<any>;
}

export const useDynamicForm = (params: UseDynamicFormParams) => {
  const { fields, errors } = params;

  const formFieldsComponent = React.useMemo(() => {
    return fields.map((field) => {
      if (field.typename !== "FormRow") {
        return (
          <FormFieldSwitcher
            key={field.id}
            error={errors[field.name]}
            {...field}
          />
        );
      } else if (field.typename === "FormRow") {
        //TODO: fix type for data
        return (
          //@ts-ignore
          <div key={field.id} className="flex flex-col space-x-2 md:flex-row">
            {field.fields.map((field) => (
              //TODO: fix type for data
              //@ts-ignore
              <FormFieldSwitcher
                key={field.id}
                error={errors[field.name]}
                {...field}
              />
            ))}
          </div>
        );
      }
    });
  }, [fields, errors]);

  return {
    formFieldsComponent,
  };
};
