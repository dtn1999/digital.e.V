import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "../Icons/CloseIcon";
import ReactIconsLoader from "../common/ReactIconsLoader";

export const DialogWrapper: React.FC<any> = React.memo(
  ({ isOpen, closeModal, children, title }) => (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-[3000]" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary opacity-90" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="h-full w-full transform overflow-hidden rounded bg-background py-3 text-left align-middle transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-between px-3 py-2 text-lg font-medium leading-6 text-white"
                >
                  <span>{title}</span>
                  <button onClick={closeModal}>
                    <span className="font-bold">
                      <ReactIconsLoader
                        icon="AiOutlineClose"
                        className="text-3xl font-bold group-hover:translate-x-5 transition-all duration-700"
                      />
                    </span>
                  </button>
                </Dialog.Title>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
);
