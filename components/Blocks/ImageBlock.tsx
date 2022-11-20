import React from "react";
import StoryblokEditable from "../StoryblokEditable";
import Container from "../common/Container";
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
interface Props {
  blok: any;
}

const ImageBlock: React.FC<Props> = React.memo(({ blok }) => {
  const { image, marginTop, marginBottom, marginLeft, marginRight, height } =
    blok;
  return (
    <StoryblokEditable blok={blok}>
      <div
        className="relative w-full h-full max-h-[600px] bg-primary/80"
        style={{
          marginTop: Number(marginTop),
          marginBottom: Number(marginBottom),
          marginLeft: Number(marginLeft),
          marginRight: Number(marginRight),
          height: Number(height),
        }}
      >
        <Image
          src={image.filename}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </StoryblokEditable>
  );
});
export default ImageBlock;
