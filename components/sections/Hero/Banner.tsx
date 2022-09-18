import React from "react";
import cn from "classnames";
import Headline from "@app/theme/blocks/Headline";
import Text from "@app/theme/blocks/Text";
import Image from "next/image";
import { BannerFragment } from "@app/types/graphql";



const Banner: React.FC<BannerFragment> = React.memo(
  ({ image, title, description }) => {
    return (
      <div className={cn("w-full relative h-1/2")}>
        <Image
          src={image.url}
          alt={`${title}: ${description}`}
          layout="fill"
          objectFit="cover"
          objectPosition="70% 70%"
        />
        <div className="absolute inset-0 flex items-center bg-black/70">
          <div className="flex h-full w-full items-center">
            <div className="relative mx-auto flex h-full w-full flex-col items-end justify-center px-2 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Headline
                className="text-white"
                underline
                underlineAlign="right"
                underlineColor="primary"
                value={title.text}
              />
              <Text
                color="white"
                className="mt-4 w-[60%] text-right text-white"
                value={description.content}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default Banner;
