import React from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { BaseStoryBlockProps } from "../types/global";
import Image from "next/image";
import Container from "./Container";

const SectionWithImage: React.FC<BaseStoryBlockProps> = React.memo(
  ({ blok }) => {
    console.log("SectionWithImage", blok);
    const imageUrl = blok.image.filename;
    return (
      <Container>
        <div
          className={cn("grid grid-cols-1 md:grid-cols-2 bg-[#F0F0F0] mt-36")}
          {...storyblokEditable(blok)}
        >
          <div className="w-full h-full pr-5">
            <div className="w-full h-full relative">
              <Image src={imageUrl} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="w-full h-full px-5 py-7 bg-[#F0F0F0]">
            {blok.blocks.map((blok: any) => (
              <div key={blok._uid} className="flex-auto px-6">
                <StoryblokComponent blok={blok} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
);
export default SectionWithImage;
