import React from "react";
import { BaseProps } from "../types/global";
import { storyblokEditable } from "@storyblok/react";

interface Props extends BaseProps {
  blok: any;
}

const StoryblokEditableWrapper: React.FC<Props> = React.memo(
  ({ className, children, blok }) => {
    return (
      <div className={className} {...storyblokEditable(blok)}>
        {children}
      </div>
    );
  }
);
export default StoryblokEditableWrapper;
