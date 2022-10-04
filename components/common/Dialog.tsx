import React from "react";
import cn from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import DynamicForm from "../Blocks/Form";
import FormInput from "../Blocks/Form/FormInput";
import FormTextarea from "../Blocks/Form/FormTextarea";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ContactDialog: React.FC<Props> = React.memo(({ isOpen, closeModal }) => {
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const form = React.useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("service_ID", "template_ID", "", "").then(
      (result: any) => {
        console.log(result.text);
      },
      (error: any) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DynamicForm
                  onSubmit={(data: any) => {
                    console.log(data);
                    return new Promise((resolve) => {
                      setTimeout(() => {
                        resolve(true);
                      }, 2000);
                    });
                  }}
                >
                  <div className="flex mt-4 w-full md:flex-row flex-col">
                    <FormInput
                      label={"Vorname"}
                      placeholder={""}
                      name={"firstname"}
                      required
                      type="text"
                    />
                    <FormInput
                      label={"Nachname"}
                      placeholder={""}
                      name={"lastname"}
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex mt-4 w-full md:flex-row flex-col">
                    <FormInput
                      label={"Email"}
                      placeholder={""}
                      name={"email"}
                      required
                      type="email"
                    />
                    <FormInput
                      label={"Telefon/Mobil"}
                      placeholder={""}
                      name={"phone"}
                      required={false}
                      type="phone"
                    />
                  </div>
                  <FormTextarea name={"message"} label="Ihr Nachricht an uns" />
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={"this is a wrong site key"}
                    className="mb-4"
                  />
                  <p className="mx-2 mt-4">
                    Sie erklären sich damit einverstanden, dass Ihre Daten zur
                    Bearbeitung Ihres Anliegens verarbeitet werden. Weitere
                    Informationen und Widerrufshinweise finden Sie in der{" "}
                    <Link href="#">
                      <a href="#" className="text-primary">
                        Datenschutzerklärung
                      </a>
                    </Link>
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex items-center text-white bg-primary px-10 py-5 text-lg font-normal rounded-[200px] group transition-all duration-700 my-5"
                    >
                      <span className="first-letter:uppercase mx-5 transition-all duration-700">
                        Absenden
                      </span>
                    </button>
                  </div>
                </DynamicForm>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});
export default ContactDialog;
