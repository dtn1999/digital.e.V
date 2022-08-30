import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
interface Props {
  blok: any;
}
const Page:React.FC<Props> = ({ blok }) => (
  <main className="px-6" {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok:any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
