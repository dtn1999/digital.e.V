import React from "react";
import {
  FieldErrorsImpl,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useDynamicForm } from "../../../hooks/useDynamicForm";
import { handleRecaptchaValidation } from "../../../lib/handleRecaptchaValidation";
import Button from "../../common/Button";

const DynamicForm: React.FC<any> = React.memo(
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
          <ReCAPTCHA ref={recaptchaRef} sitekey={""} className="mb-4" />
          <Button disabled={isSubmitting} type="submit">
            {submitButtonLabel}
          </Button>
        </form>
      </FormProvider>
    );
  }
);
export default DynamicForm;
