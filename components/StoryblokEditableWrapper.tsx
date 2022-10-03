import React from "react";
import { BaseProps } from "../types/global";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";

interface Props extends BaseProps {
  blok: any;
}

const StoryblokEditableWrapper: React.FC<Props> = React.memo(
  ({ className, children, blok }) => {
    return (
      <div
        className={cn("relative h-full w-full", className)}
        {...storyblokEditable(blok)}
      >
        {children}
      </div>
    );
  }
);
export default StoryblokEditableWrapper;
