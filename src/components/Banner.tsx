import React from "react";
import cn from "classnames";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import Headline from "./Headline";

interface Props {
  blok: any;
}
const Banner: React.FC<Props> = React.memo(({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={cn("relative mt-[100px] w-full h-[45vh] bg-primary")}
    >
      <Image
        src={blok.image.filename}
        alt={`${blok.title}: ${blok.description}`}
        layout="fill"
        objectFit="cover"
        objectPosition={blok.objectPosition}
        priority
      />
      <div className="absolute inset-0 flex items-center bg-black/70">
        <div className="flex h-full w-full flex-col items-center justify-center px-4 md:px-0">
          <div className="relative mx-auto flex h-full w-full flex-col items-end justify-center px-2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex justify-end ">
              <Headline
                className="justify-center text-sm text-white"
                blok={{
                  underline: true,
                  underlineAlign: "right",
                  value: blok.headline,
                }}
              />
            </div>
            <p className="my-4 max-w-lg  text-right text-white md:px-0 lg:pl-[300px]">
              {blok.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Banner;
