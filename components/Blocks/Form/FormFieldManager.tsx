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
        return <FormInput key={field.id} {...field} error={error} />;
      case "FormTextarea":
        return <FormTextarea key={field.id} {...field} error={error} />;
      case "FormRadio":
        return <FormRadio key={field.id} {...field} error={error} />;
      case "FormCheckbox":
        return <FormCheckbox key={field.id} {...field} error={error} />;
      case "FormSelect":
        return <FormSelect key={field.id} {...field} error={error} />;
      default:
        return null;
    }
  }
);

export default FormFieldSwitcher;
