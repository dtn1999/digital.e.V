import React from "react";
import cn from "classnames";
import { renderRichText } from "@storyblok/react";

interface Props {}
const RichText: React.FC<Props> = React.memo(({}) => {
  return <div className={cn("")}> RichText </div>;
});
export default RichText;
