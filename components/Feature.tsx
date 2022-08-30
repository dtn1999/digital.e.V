import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { BaseStoryBlockProps } from "../types/global";
 
const Feature: React.FC<BaseStoryBlockProps> = ({ blok }) => {
  return (
    <div className="py-2" {...storyblokEditable(blok)} key={blok._uid}>
      <h2 className="text-lg"> {blok.name} </h2>
    </div>
  );
};

export default Feature;
