import React from "react";
import { FieldErrorsImpl, SubmitHandler } from "react-hook-form";
import FormFieldSwitcher from "../../components/Blocks/Form/FormFieldManager";

interface UseDynamicFormParams {
  fields: any[]; 
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
            {field.fields.map((field:any) => (
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
