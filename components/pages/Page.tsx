import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const PageWrapperComponent = ({ blok }: any) => (
  <div className="relative" {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </div>
);

export default PageWrapperComponent;
