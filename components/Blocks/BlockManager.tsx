import React from "react";
import { StoryblokComponent } from "@storyblok/react";

const BlockManager: React.FC<any> = React.memo(({ blocks }) => {
  const blocksComponents = React.useMemo(() => {
    // @ts-ignore

    return blocks.map((blok) => (
      <StoryblokComponent blok={blok} key={blok._uid} />
    ));
  }, [blocks]);
  return <React.Fragment>{blocksComponents}</React.Fragment>;
});
export default BlockManager;
