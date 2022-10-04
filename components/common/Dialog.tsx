import React from "react";
import cn from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const ContactDialog: React.FC<Props> = React.memo(({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
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
                <div className="flex mt-2 w-full">
                  <div className="flex flex-col w-full mx-2">
                    <p className="font-medium">Vorname</p>
                    <input className="p-[10px] bg-[rgba(0,0,0,.04)] rounded-sm" />
                  </div>
                  <div className="flex flex-col w-full mx-2">
                    <p className="font-medium">Nachname</p>
                    <input className="p-[10px] bg-[rgba(0,0,0,.04)] rounded-sm" />
                  </div>
                </div>
                <div className="flex mt-2">
                  <div className="flex flex-col mx-2 w-full">
                    <p className="font-medium">Email</p>
                    <input className="p-[10px] bg-[rgba(0,0,0,.04)] rounded-sm" />
                  </div>
                  <div className="flex flex-col mx-2 w-full">
                    <p className="font-medium">Telefone/Mobil</p>
                    <input className="p-[10px] bg-[rgba(0,0,0,.04)] rounded-sm" />
                  </div>
                </div>
                <div className="mx-2">
                  <p>Ihre Nachricht an uns</p>
                  <textarea
                    rows={5}
                    className="w-full bg-[rgba(0,0,0,0.04)]"
                  ></textarea>
                </div>
                <p className="mx-2">
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
                    <span className="first-letter:uppercase mx-5 group-hover:translate-x-2 transition-all duration-700">
                      Absenden
                    </span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});
export default ContactDialog;
