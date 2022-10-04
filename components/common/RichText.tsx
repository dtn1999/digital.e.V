import React from "react";
import cn from "classnames";
import { renderRichText } from "@storyblok/react";
import { BaseBlokProps } from "../../types/global";

const RichText: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  return <div dangerouslySetInnerHTML={{ __html: renderRichText(blok) }} />;
});
export default RichText;
