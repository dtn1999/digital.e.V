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
import { BaseProps } from "../../../types/global";

interface Props extends BaseProps {
  onSubmit: (data: any) => Promise<boolean>;
}


const DynamicForm: React.FC<Props> = React.memo(
  ({ children , onSubmit}) => {
    const methods = useForm<any>();
    const {
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = methods;

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
          {children}
        </form>
      </FormProvider>
    );
  }
);
export default DynamicForm;
