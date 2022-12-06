import React from "react";
import {
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react";
import cn from "classnames";

interface Props {
  blok: any;
}

const Page: React.FC<Props> = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className={cn({
        "h-screen overflow-x-hidden": !blok.body,
      })}
    >
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default Page;
