import React from "react";
import { storyblokEditable } from "@storyblok/react";
interface Props {
  blok: any;
}
const Teaser: React.FC<Props> = ({ blok }) => {
  return (
    <div className="py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-5xl font-bold text-left"> {blok.headline} </h2>
    </div>
  );
};

export default Teaser;
