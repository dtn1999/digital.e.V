import React from "react";
import cn from "classnames";
import { Tab as HeadLessUiTab } from "@headlessui/react";

interface TabItem {
  title: string;
  content: any;
}

interface Props {
  tabs: TabItem[];
  headline?: any;
}

const Tab: React.FC<Props> = React.memo(({ tabs, headline }) => {
  return (
    <React.Fragment>
      <HeadLessUiTab.Group>
        <HeadLessUiTab.List className="mb-4 mt-8 flex space-x-11">
          {tabs.map((tab) => (
            <HeadLessUiTab
              key={tab.title}
              className={({ selected }) =>
                cn({
                  "py-1 font-bold uppercase border-b border-transparent  focus:outline-none text-sm md:text-base":
                    true,
                  "text-tertiary": !selected,
                  "border-tertiary text-primary": selected,
                })
              }
            >
              {tab.title}
            </HeadLessUiTab>
          ))}
        </HeadLessUiTab.List>
        <HeadLessUiTab.Panels>
          {tabs.map((tab) => (
            <HeadLessUiTab.Panel
              key={tab.title}
              className="mt-4 font-light leading-8 first-letter:uppercase"
            >
              <p>{tab.content}</p>
            </HeadLessUiTab.Panel>
          ))}
        </HeadLessUiTab.Panels>
      </HeadLessUiTab.Group>
    </React.Fragment>
  );
});
export default Tab;