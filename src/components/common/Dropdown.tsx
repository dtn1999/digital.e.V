import React, { Fragment } from "react";
import cn from "classnames";
import { Menu, Transition } from "@headlessui/react";
import ReactIconsLoader from "./ReactIconsLoader";
import { BaseProps } from "@app/types";

export type DisplayStyle = "list" | "calendar";

interface Props extends BaseProps {
  handleClick: (activeView: DisplayStyle) => void;
}

const Dropdown: React.FC<Props> = React.memo(({ handleClick, className }) => {
  const [displayStyle, setDisplayStyle] = React.useState<DisplayStyle>("list");
  const handleMenuClick = React.useCallback(
    (activeView: DisplayStyle) => {
      setDisplayStyle(activeView);
      handleClick(activeView);
    },
    [handleClick]
  );

  return (
    <div className="text-right">
      <Menu
        as="div"
        className={cn("relative inline-block text-left bg-primary")}
      >
        <div className="">
          <Menu.Button
            className={cn(
              "bg-opacity/20 hover:bg-opacity/30 focus-visible:ring-opacity/75 inline-flex justify-center bg-black py-6 px-4 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white ",
              className
            )}
          >
            <span className="whitespace-nowrap uppercase">{displayStyle}</span>
            <ReactIconsLoader
              icon="FaChevronDown"
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-secondary focus:outline-none">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleMenuClick("list")}
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center p-2 text-sm`}
                  >
                    <ReactIconsLoader
                      icon="FaList"
                      className={cn({
                        "mr-2 h-5 w-5": true,
                        "text-white": active,
                      })}
                      aria-hidden="true"
                    />
                    List
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleMenuClick("calendar")}
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center p-2 text-sm`}
                  >
                    <ReactIconsLoader
                      icon="BsCalendarEvent"
                      className={cn({
                        "mr-2 h-5 w-5": true,
                        "text-white": active,
                      })}
                      aria-hidden="true"
                    />
                    Calendar
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
});
export default Dropdown;
