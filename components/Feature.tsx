import React from "react"
import { storyblokEditable } from "@storyblok/react";
interface Props {
   blok: any;
}
const Feature:React.FC<Props> = ({ blok }) => {
  return (
    <div className="py-2" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-lg"> {blok.name} </h2>
    </div>
  );
};

export default Feature;
