import React from "react";
import cn from "classnames";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Paragraph from "./Paragraph";
import Headline from "./Headline";
import { BaseBlokProps } from "../../types/global";

interface Props {
  headline?: any;
  items: ItemProps[];
}

interface ItemProps {
  summary: string;
  details: any;
}

export const AccordionItem: React.FC<ItemProps> = React.memo(
  ({ summary, details }) => {
    return (
      <Disclosure key={summary}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn({
                "flex w-full justify-between py-3 text-lg text-left lg:text-lg font-bold text-black  focus:outline-none":
                  true,
                "text-primary": open,
              })}
            >
              <span
                className={cn("pr-4 lowercase first-letter:uppercase", {
                  "text-primary": open,
                })}
              >
                {summary}
              </span>
              <span className="pr-4 text-lg font-bold text-primary">
                {open ? (
                  <span>
                    <AiOutlineMinus
                      size={25}
                      fontSize={24}
                      fontWeight={700}
                      className="text-lg font-bold"
                    />
                  </span>
                ) : (
                  <span>
                    <AiOutlinePlus
                      size={25}
                      fontSize={24}
                      fontWeight={700}
                      className="text-lg font-bold"
                    />
                  </span>
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="pb-5 text-sm font-light lowercase first-letter:uppercase">
              <Paragraph value={details} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
);

const Accordion: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  const { headline, items } = blok;
  console.log("accordion items", items);
  return (
    <React.Fragment>
      {headline && <Headline {...headline} />}
      <div className="mb-4 mt-8 w-full ">
        {items.map((item:any) => (
          <AccordionItem key={item.summary} {...item} />
        ))}
      </div>
    </React.Fragment>
  );
});
export default Accordion;
