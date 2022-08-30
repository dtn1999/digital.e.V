import React from "react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { BaseStoryBlockProps } from "../types/global";
import Image from "next/image";
interface Props {}
const SectionWithImage: React.FC<BaseStoryBlockProps> = React.memo(
  ({ blok }) => {
    return (
      <div
        className={cn("grid grid-cols-1 md:grid-cols-2")}
        {...storyblokEditable(blok)}
      >
        <div className="w-full h-full px-5">
          <div className="w-full h-full relative">
            <Image src="" alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="w-full h-full px-5 py-7 bg-[#F0F0F0]"></div>
        SectionWithImage
      </div>
    );
  }
);
export default SectionWithImage;
