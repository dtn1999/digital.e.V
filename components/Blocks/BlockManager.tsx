import React from "react";
import { BaseProps } from "@app/types";
import {
  ColumnblocksUnion,
  SectionWithImageblocksUnion,
  SectionWithImageFragment,
} from "@app/types/graphql";
import dynamic from "next/dynamic";


const CountUpComponent = dynamic(() => import("./CountUp"));
const ParagraphComponent = dynamic(() => import("./Paragraph"));
const AccordionComponent = dynamic(() => import("./Accordion"));
const TabComponent = dynamic(() => import("./Tab"));
const MultiColumnComponent = dynamic(() => import("./MultiColumn"));

type BlockTypename =
  | NonNullable<SectionWithImageblocksUnion["__typename"]>
  | NonNullable<ColumnblocksUnion["__typename"]>;

interface Props extends BaseProps {
  blocks: SectionWithImageFragment["blocks"];
}

interface BlockSwitcherProps {
  typename: BlockTypename;
  // TODO: fix type for data
  data: any;
}

const BlockSwitcher: React.FC<BlockSwitcherProps> = React.memo(
  ({ typename, data }) => {
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
          <CountUpComponent end={data.end} className="text-4xl font-bold text-primary" />
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
  }
);

const BlockManager: React.FC<Props> = React.memo(({ blocks }) => {
  const blocksComponents = React.useMemo(() => {
    // @ts-ignore
    return blocks.map(({ id, typename, ...props }) => (
      <BlockSwitcher key={id} typename={typename} data={{ ...props }} />
    ));
  }, [blocks]);
  return <React.Fragment>{blocksComponents}</React.Fragment>;
});
export default BlockManager;
