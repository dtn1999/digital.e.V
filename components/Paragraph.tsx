import React from "react";
import cn from "classnames";
import StoryblokEditableWrapper from "./StoryblokEditableWrapper";
import { BaseStoryBlockProps } from "../types/global";
interface Props {}
const Paragraph: React.FC<BaseStoryBlockProps> = React.memo(({ blok }) => {
  return (
    <StoryblokEditableWrapper blok={blok}>
      <p className="">{blok.value}</p>
    </StoryblokEditableWrapper>
  );
});
export default Paragraph;
