import React from "react";
import cn from "classnames";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

interface Props {
  blok: any;
}

const ImageBlok: React.FC<Props> = React.memo(({ blok }) => {
  const { width, height, image, objectFit, objectPosition } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      style={{ width: Number(width) || 300, height: Number(height) || 200 }}
      className={cn("relative")}
    >
      <Image
        src={image.filename}
        alt={image.alt}
        layout="fill"
        objectFit={objectFit}
        objectPosition={objectPosition}
        priority
      />
    </div>
  );
});
export default ImageBlok;
