/* eslint-disable react/no-unescaped-entities */
import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Modal from "src/components/common/Modal";
import { Dialog } from "@headlessui/react";
import { submitEnquiryForm } from "src/utils/form/recaptcha";
import { sendEmailWithData } from "@app/utils/form/email";
import FormSubmit from "src/components/form/FormSubmit";
import { Form } from "src/components/form/Form";
import FormInput from "src/components/form/FormInput";
import FormTextarea from "src/components/form/FormTextarea";
import FormCheckbox from "src/components/form/FormCheckbox";

interface Props {}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const methods = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  });
  const { reset, formState } = methods;
  const { executeRecaptcha } = useGoogleReCaptcha();
  console.log("formState", formState);
  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    reset();
  }, [reset]);

  const openModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const onSubmit: SubmitHandler<ContactFormData> = React.useCallback(
    async (data: ContactFormData) => {
      if (executeRecaptcha) {
        setLoading(true);
        const gReCaptchaToken = await executeRecaptcha("enquiryFormSubmit");
        const { success } = await submitEnquiryForm(gReCaptchaToken);
        if (success) {
          const status = await sendEmailWithData(data);
          if (status) {
            openModal();
          }
          setLoading(false);
        }
      }
    },
    [executeRecaptcha, openModal]
  );

  return (
    <div className={cn("bg-white w-full px-8 py-8")}>
      <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          Submission successful
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your message has been successfully submitted. We’ve sent you a
            confirmation email. Please check your inbox. If you don't see it,
            please check your spam folder or contact us at{" "}
            <span className="text-primary">vkii@contact.de</span>
          </p>
          <FormSubmit
            className="my-2"
            loading={loading}
            label="go it, thanks!"
            onClick={closeModal}
          />
        </div>
      </Modal>
      <Form onSubmit={onSubmit} methods={methods}>
        <FormInput name="firstName" label="Vorname" required type="text" />
        <FormInput name="lastName" label="Nachname" required type="text" />
        <FormInput name="email" label="E-Mail-Adresse" required />
        <FormTextarea name="message" label="Nachricht" required row={5} />
        <div className="my-2 flex items-center">
          <FormCheckbox name="acceptTerms" required />
          <span>
            by submitting this form, you agree to our{" "}
            <a href="#" className="text-primary">
              privacy policy
            </a>
          </span>
        </div>
        <FormSubmit className="w-full" label="Send" loading={loading} />
      </Form>
    </div>
  );
};

export default ContactForm;
