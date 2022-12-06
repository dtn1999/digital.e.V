import React from "react";
import cn from "classnames";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Container from "./Container";

interface Props {
  blok: any;
}
const SectionWithImg: React.FC<Props> = React.memo(({ blok }) => {
  const {
    image,
    imagePosition,
    backgroundColor,
    headline,
    cta,
    blocks = [],
  } = blok;
  const navigate = React.useCallback((to: string) => {}, []);
  return (
    <Container>
      <div
        {...storyblokEditable(blok)}
        className={cn(
          "relative grid w-full md:grid-cols-2 overflow-hidden text-white"
        )}
      >
        <motion.div
          variants={slideLeftRight}
          initial="imageHidden"
          animate="animate"
          //whileInView="animate"
          viewport={{ once: true }}
          custom={imagePosition}
          className={cn({
            "relative flex w-full px-4 md:px-0": true,
            "order-first": !imagePosition || imagePosition == "left",
            "order-last justify-end": imagePosition === "right",
          })}
        >
          <div className="relative h-80 w-full overflow-hidden transition-transform duration-700 md:h-full lg:max-h-[800px]">
            <Image
              src={image.filename}
              alt={
                image.fileName ||
                "This represent the image for the section with image"
              }
              layout="fill"
              className="object-cover object-top transition-all duration-700"
            />
          </div>
        </motion.div>
        <motion.div
          variants={slideLeftRight}
          initial="panelHidden"
          whileInView="animate"
          viewport={{ once: false }}
          custom={imagePosition}
          className={cn({
            "flex flex-col justify-start w-full py-5 px-10 md:px-15": true,
          })}
        >
          {blok.body &&
            blok.body.map((nestedBlok: any) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          {cta && cta[0] && (
            <div className="mt-9 flex justify-start">
              <a
                onClick={() => navigate((cta.link as any).slug)}
                className="flex cursor-pointer items-center space-x-1 text-xs font-medium uppercase text-primary hover:text-black"
              >
                <span>{cta[0].label}</span>
                <BsChevronRight />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </Container>
  );
});
export default SectionWithImg;

const slideLeftRight = {
  imageHidden: (imagePosition: any) => ({
    opacity: 0,
    x: !imagePosition || imagePosition === "left" ? "-100%" : "100%",
  }),
  panelHidden: (imagePosition: any) => ({
    opacity: 0,
    x: !imagePosition || imagePosition === "left" ? "100%" : "-100%",
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: "tween",
    },
  },
};
