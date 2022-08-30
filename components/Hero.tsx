import React from "react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
interface Props {
  blok: any;
}
const HeroSection: React.FC<Props> = React.memo(({ blok }) => {
  console.log("block properties ", blok);
  return (
    <div
      className={cn("w-hull h-[70%] bg-sky-800")}
      {...storyblokEditable(blok)}
    ></div>
  );
});
export default HeroSection;
