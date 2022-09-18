import React from "react";
import cn from "classnames";
import FormCheckbox from "./FormCheckbox";
import FormInput from "./FormInput";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";


const FormFieldSwitcher: React.FC<any> = React.memo(
  ({ typename, __typename, error, ...field }) => {
    switch (typename || __typename) {
      case "FormInput":
        //TODO: fix type for data
        //@ts-ignore
        return <FormInput key={field.id} {...field} error={error} />;
      case "FormTextarea":
        //TODO: fix type for data
        //@ts-ignore
        return <FormTextarea key={field.id} {...field} error={error} />;
      case "FormRadio":
        //@ts-ignore
        return <FormRadio key={field.id} {...field} error={error} />;
      case "FormCheckbox":
        // @ts-ignore
        return <FormCheckbox key={field.id} {...field} error={error} />;
      case "FormSelect":
        // @ts-ignore
        return <FormSelect key={field.id} {...field} error={error} />;
      default:
        return null;
    }
  }
);

export default FormFieldSwitcher;
