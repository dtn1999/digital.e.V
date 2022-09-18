import React from "react";
import {
  FieldErrorsImpl,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import cn from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import { ButtonVariant, FormFragment } from "@app/types/graphql";
import FormFieldSwitcher from "./FormFieldManager";
import { useDynamicForm } from "@app/hooks/useDynamicForm";
import { SITE_KEY } from "@app/utils/envVariables";
import { toast } from "react-toastify";

interface Props {
  fields: Required<FormFragment["fields"][number]>[];
  submitButtonLabel: string;
  onSubmit: SubmitHandler<any>;
}

const DynamicForm: React.FC<Props> = React.memo(
  ({ fields, submitButtonLabel, onSubmit }) => {
    const methods = useForm<any>();
    const {
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = methods;

    const { formFieldsComponent } = useDynamicForm({ fields, errors });
    const recaptchaRef = React.useRef<ReCAPTCHA>(null);

    const handleOnSubmit: SubmitHandler<any> = React.useCallback(
      async (data) => {
        toast.promise(
          async () => {
            const token = recaptchaRef.current?.getValue();
            console.log("token", token);
            const recaptchaValid = await handleRecaptchaValidation(token || "");
            if (recaptchaValid) {
              const successful = await onSubmit(data);
              if (successful) {
                reset();
              }
              recaptchaRef.current?.reset();
            }
          },
          {
            pending: "Form is being submitted",
            success: "Form submitted successfully",
            error: "Error while submitting the Form",
          }
        );
      },
      [onSubmit, reset]
    );
    return (
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {formFieldsComponent}
          <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} className="mb-4" />
          <Button
            variant={ButtonVariant.Solid}
            disabled={isSubmitting}
            type="submit"
          >
            {submitButtonLabel}
          </Button>
        </form>
      </FormProvider>
    );
  }
);
export default DynamicForm;
