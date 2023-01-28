import React from "react";
import cn from "classnames";
import Container from "../Container";
import ReactIconsLoader from "./ReactIconsLoader";
import SocialsHandles from "./SocialsHandles";
import { StoryblokComponent } from "@storyblok/react";
interface Props {
  socials: any;
  footerLinks: any;
}
const Footer: React.FC<Props> = React.memo(({ socials = [], footerLinks }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={cn("relative border-t text-black bg-secondary pb-10")}>
      <div className="w-full bg-[#E8E8E8]">
        <SocialsHandles
          socials={socials}
          className="flex-wrap py-[10px] text-black"
          withCustomTextColor
        />
      </div>
      <Container>
        <div className="flex flex-col items-center justify-center py-5 px-4 lg:flex-row lg:justify-between">
          <div className="flex">
            {footerLinks.map((nestedBlok: any) => (
              <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />
            ))}
          </div>
          <div className="flex justify-end pb-6 pt-9 text-center">
            Copyright &#169; {year} vkii ruhrbezirk. All Rights Reserved.
          </div>
        </div>
      </Container>
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="absolute bottom-0 right-0 mr-8 mb-4 flex h-11 w-11 cursor-pointer items-center justify-center border border-black/10"
      >
        <ReactIconsLoader
          icon="RiArrowUpLine"
          className="text-2xl text-black/50"
        />
      </div>
    </footer>
  );
});
export default Footer;
