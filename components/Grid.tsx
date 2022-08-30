import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { BaseStoryBlockProps } from "../types/global";

const Grid: React.FC<BaseStoryBlockProps> = ({ blok }) => (
  <ul className="flex py-8 mb-6" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((blok: any) => (
      <li key={blok._uid} className="flex-auto px-6">
        <StoryblokComponent blok={blok} />
      </li>
    ))}
  </ul>
);

export default Grid;
