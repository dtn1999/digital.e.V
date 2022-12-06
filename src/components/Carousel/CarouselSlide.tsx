import React from "react";
import cn from "classnames";
import { container, fadeInOut } from "@app/animations";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Button from "src/components/common/Button";
import { storyblokEditable } from "@storyblok/react";
import Container from "../Container";
import Headline from "../Headline";
import { useSwiperSlide } from "swiper/react";

interface Props {
  blok: any;
}
const CarouselSlide: React.FC<Props> = React.memo(({ blok }) => {
  const {
    image,
    description,
    cta: [cta],
    _uid,
    headline,
  } = blok;
  const { isActive } = useSwiperSlide();
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative flex h-screen w-full bg-primary  px-5 pt-10 md:px-20"
    >
      <div className="relative flex h-full w-full flex-col justify-start pt-24 md:pt-32">
        {isActive && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Container className="absolute z-50 mb-20">
              <motion.div variants={fadeInOut} className="md:my-5 lg:max-w-4xl">
                <Headline
                  blok={{ value: headline }}
                  className="text-[12px] text-white"
                />
              </motion.div>
              <motion.div
                variants={fadeInOut}
                className="my-5 text-lg lg:pr-[25%]"
              >
                <p className="text-sm font-light leading-relaxed text-white md:text-xl">
                  {description}
                </p>
              </motion.div>
              <motion.div
                variants={fadeInOut}
                className="flex justify-start space-x-8 pb-4 lg:mt-9"
              >
                <Button
                  href={cta?.href}
                  className="space-x-1 bg-primary text-xs font-medium text-white"
                  variant="solid"
                >
                  <span className="text-white">{cta?.label}</span>
                  <BsChevronRight className="text-primary" />
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image.filename}
          alt={image.filename || "this an image for the carousel slide"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="object-cover object-center"
        />
        <div className={cn("absolute inset-0 z-20 bg-black/70")} />
      </div>
    </div>
  );
});
export default CarouselSlide;
