import React from "react";
import cn from "classnames";
import { StoryblokComponent } from "@storyblok/react";
import StoryblokEditable from "../../StoryblokEditable";
import Container from "../../common/Container";
interface Props {
  blok: any;
}

const SectionLayout: React.FC<Props> = React.memo(({ blok }) => {
  const { blocks, paddingTop, paddingBottom, marginTop, marginBottom } = blok;
  console.log("blok", blok);
  const loadProjects = React.useCallback(() => {

  }, [])
  return (
    <StoryblokEditable blok={blok}>
      <Container>
        <div
          className="grid md:grid-cols-3 gap-4 grid-cols-1"
          style={{
            paddingTop: Number(paddingTop),
            paddingBottom: Number(paddingBottom),
            marginTop: Number(marginTop),
            marginBottom: Number(marginBottom),
          }}
        >

        </div>
      </Container>
    </StoryblokEditable>
  );
});
export default SectionLayout;
