import React from "react";
import cn from "classnames";
import StoryblokEditableWrapper from "./StoryblokEditableWrapper";
import { BaseStoryBlockProps } from "../types/global";

const Paragraph: React.FC<BaseStoryBlockProps> = React.memo(({ blok }) => {
  return (
    <StoryblokEditableWrapper blok={blok}>
      <p className="text-lg mb-5">{blok.value}</p>
    </StoryblokEditableWrapper>
  );
});
export default Paragraph;
