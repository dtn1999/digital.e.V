import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import RichtextRenderer from "./common/RichtextRenderer";
interface Props {
  blok: any;
}
const Paragraph: React.FC<Props> = React.memo(({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
    className={cn("font-light w-full text-black py-4 md:px-0 md:py-0")}
    >
      <RichtextRenderer content={blok.content} />
    </div>
  );
});
export default Paragraph;
