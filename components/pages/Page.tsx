import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const PageComponent = ({ blok }: any) => (
  <div className="relative w-full h-full" {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </div>
);

export default PageComponent;
