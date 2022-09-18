import React from "react";
import cn from "classnames";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Paragraph from "./Paragraph";
import Headline from "./Headline";

interface Props {
  headline?: any;
  items: any[];
}

const Accordion: React.FC<Props> = React.memo(({ items, headline }) => {
  console.log("accordion items", items);
  return (
    <React.Fragment>
      {headline && <Headline {...headline} />}
      <div className="mb-4 mt-8 w-full ">
        {items.map((item) => (
          <Disclosure key={item.summary}>
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
                    {item.summary}
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
                  <Paragraph value={item.details} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </React.Fragment>
  );
});
export default Accordion;
