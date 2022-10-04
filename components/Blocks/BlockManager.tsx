import React from "react";
import dynamic from "next/dynamic";

const CountUpComponent = dynamic(() => import("./CountUp"));
const ParagraphComponent = dynamic(() => import("./Paragraph"));
const AccordionComponent = dynamic(() => import("./Accordion"));
const TabComponent = dynamic(() => import("./Tab"));
const MultiColumnComponent = dynamic(() => import("./MultiColumn"));

export const BlockSwitcher: React.FC<any> = React.memo(({ typename, data }) => {
  switch (typename) {
    case "Accordion":
      return <AccordionComponent items={data.items} />;
    case "Tab":
      return <TabComponent tabs={data.tabs} />;
    case "MultiColumn":
      return (
        <MultiColumnComponent
          columns={data.columns}
          numberOfColumnsOnDesktop={data.numberOfColumnsOnDesktop}
          numberOfColumnsOnMobile={data.numberOfColumnsOnMobile}
        />
      );
    case "CountUp":
      return (
        <CountUpComponent
          end={data.end}
          className="text-4xl font-bold text-primary"
        />
      );
    case "Paragraph":
      return (
        <div className="mt-4 text-lg">
          <ParagraphComponent value={data.value} />
        </div>
      );
    default:
      return <React.Fragment></React.Fragment>;
  }
});

const BlockManager: React.FC<any> = React.memo(({ blocks }) => {
  const blocksComponents = React.useMemo(() => {
    // @ts-ignore
    return blocks.map(({ blok }) => (
      <BlockSwitcher key={blok.id} typename={blok.component} data={blok} />
    ));
  }, [blocks]);
  return <React.Fragment>{blocksComponents}</React.Fragment>;
});
export default BlockManager;
