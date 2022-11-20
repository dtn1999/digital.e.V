import React from "react";
import cn from "classnames";
import StoryblokEditable from "../StoryblokEditable";
import Container from "../common/Container";
import { StoryblokComponent } from "@storyblok/react";
interface Props {
  blok: any;
}

const SectionContainer: React.FC<Props> = React.memo(({ blok }) => {
  const { blocks, marginTop, marginBottom } = blok;
  console.log("blok", blok);
  return (
    <StoryblokEditable blok={blok}>
      <Container>
        <div
          style={{
            marginTop: Number(marginTop),
            marginBottom: Number(marginBottom),
          }}
        >
          {blocks.map((blok: any) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </Container>
    </StoryblokEditable>
  );
});
export default SectionContainer;
