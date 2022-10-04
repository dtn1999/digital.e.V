import React from "react";
import cn from "classnames";
import { Tab as HeadLessUiTab } from "@headlessui/react";
import Headline from "./Headline";
import Paragraph from "./Paragraph";
import { BaseBlokProps } from "../../types/global";

interface TabItem {
  title: string;
  content: any;
}

interface Props {
  tabs: TabItem[];
  headline?: any;
}

const Tab: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  const { items: tabs, headline } = blok;
  return (
    <React.Fragment>
      {headline && (
        <Headline value={headline} underline underlineAlign="left" />
      )}

      <HeadLessUiTab.Group>
        <HeadLessUiTab.List className="mb-4 mt-8 flex space-x-11">
          {tabs.map((tab: any) => (
            <HeadLessUiTab
              key={tab.title}
              className={({ selected }) =>
                cn({
                  "py-1 font-bold uppercase border-b border-transparent  focus:outline-none text-sm md:text-base":
                    true,
                  "text-tertiary": !selected,
                  "border-secondary text-primary": selected,
                })
              }
            >
              {tab.title}
            </HeadLessUiTab>
          ))}
        </HeadLessUiTab.List>
        <HeadLessUiTab.Panels>
          {tabs.map((tab: any) => (
            <HeadLessUiTab.Panel
              key={tab.title}
              className="mt-4 font-light leading-8 first-letter:uppercase text-justify p  r-5"
            >
              <Paragraph blok={tab.content} />
            </HeadLessUiTab.Panel>
          ))}
        </HeadLessUiTab.Panels>
      </HeadLessUiTab.Group>
    </React.Fragment>
  );
});
export default Tab;
