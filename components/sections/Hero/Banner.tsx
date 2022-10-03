import React from "react";
import cn from "classnames";
import Image from "next/image";
import Headline from "../../Blocks/Headline";
import Paragraph from "../../Blocks/Paragraph";

interface Props {
  blok: any;
}
const Banner: React.FC<Props> = React.memo(({ blok }) => {
  const { headline, description, image } = blok;
  return (
    <div className={cn("w-full relative h-1/2")}>
      <Image
        src={image.url}
        alt={`${headline}: ${description}`}
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
              value={headline}
            />
            <Paragraph value={description} />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Banner;
