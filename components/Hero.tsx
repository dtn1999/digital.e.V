import React from "react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
interface Props {
  blok: any;
}
const HeroSection: React.FC<Props> = React.memo(({ blok }) => {
  return (
    <div className={cn("")} {...storyblokEditable(blok)}>
      {" "}
      HeroSection{" "}
    </div>
  );
});
export default HeroSection;
