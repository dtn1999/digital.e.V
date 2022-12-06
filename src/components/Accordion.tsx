import React from "react";
import cn from "classnames";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import RichtextRenderer from "./common/RichtextRenderer";

interface Props {
  blok: any;
}

const Accordion: React.FC<Props> = React.memo(({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="mb-4 mt-8 w-full ">
      {blok.items?.map((item: any) => (
        <StoryblokComponent blok={item} key={item._uid} />
      ))}
    </div>
  );
});

interface AccordionItemProps {
  blok: any;
}

export const AccordionItem: React.FC<AccordionItemProps> = React.memo(
  ({ blok }) => {
    return (
      <Disclosure key={blok.summary}>
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
                {blok.summary}
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
            <Disclosure.Panel className="pb-5 text-sm font-light lowercase text-black first-letter:uppercase">
              <RichtextRenderer 
               content={blok.description}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
);
export default Accordion;
