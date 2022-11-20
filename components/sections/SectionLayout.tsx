import React from "react";
import cn from "classnames";
import StoryblokEditable from "../StoryblokEditable";
import Container from "../common/Container";
import { StoryblokComponent } from "@storyblok/react";
interface Props {
  blok: any;
}

const SectionLayout: React.FC<Props> = React.memo(({ blok }) => {
  const { blocks, paddingTop, paddingBottom } = blok;
  console.log("blok", blok);
  const displayLayoutContainer = React.useCallback(
    (columnNumber: number, blocks: any[]) => {
      const className = `grid md:grid-cols-${columnNumber} gap-4 grid-cols-1`;
      return (
        <div className={className}>
          {blocks.map((blok: any) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      );
    },
    []
  );
  return (
    <StoryblokEditable blok={blok}>
      <Container>
        <div
          className=""
          style={{
            paddingTop: Number(paddingTop),
            paddingBottom: Number(paddingBottom),
          }}
        >
          {displayLayoutContainer(blocks.length, blocks)}
        </div>
      </Container>
    </StoryblokEditable>
  );
});
export default SectionLayout;
