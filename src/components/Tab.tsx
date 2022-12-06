import React from "react";
import cn from "classnames";
import { Tab as HeadLessUiTab } from "@headlessui/react";
import Headline from "./Headline";
import Paragraph from "./Paragraph";
import { StoryblokComponent } from "@storyblok/react";

interface Props {
  blok: any;
}

const Tab: React.FC<Props> = React.memo(({ blok }) => {
  return (
    <React.Fragment>
      {/* {headline && <Headline {...headline} />} */}
      <HeadLessUiTab.Group>
        <HeadLessUiTab.List className="mb-4 mt-8 flex space-x-11">
          {blok.tabs?.map((tab: any) => (
            <HeadLessUiTab
              key={tab._uid}
              className={({ selected }) =>
                cn({
                  "py-1 font-bold uppercase border-b border-transparent  focus:outline-none text-sm md:text-base":
                    true,
                  "text-tertiary": !selected,
                  "border-tertiary text-primary": selected,
                })
              }
            >
              {tab.summary}
            </HeadLessUiTab>
          ))}
        </HeadLessUiTab.List>
        <HeadLessUiTab.Panels>
          {blok.tabs.map((tab: any) => (
            <HeadLessUiTab.Panel
              key={tab._uid}
              className="mt-4 font-light leading-8 first-letter:uppercase"
            >
              {tab.body?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </HeadLessUiTab.Panel>
          ))}
        </HeadLessUiTab.Panels>
      </HeadLessUiTab.Group>
    </React.Fragment>
  );
});
export default Tab;
