import React from "react";
import cn from "classnames";
import StoryblokEditable from "../StoryblokEditable";
interface Props {
  blok: any;
}

const SectionContainer: React.FC<Props> = React.memo(({ blok }) => {
  return (
    <StoryblokEditable blok={blok}>
      <div className={cn("")}> SectionContainer </div>;
    </StoryblokEditable>
  );
});
export default SectionContainer;
