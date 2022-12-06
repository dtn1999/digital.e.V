import React from "react";
import { storyblokEditable } from "@storyblok/react";

interface Props {
  blok: any;
}

const Teaser: React.FC<Props> = ({ blok }) => {
  return (
    <h2 className="mb-10 text-2xl" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
