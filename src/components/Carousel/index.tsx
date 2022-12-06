"use-client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useWindowSize } from "react-use";
import NavigationControls from "./NavigationControls";

interface Props {
  blok: any;
}

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel: React.FC<Props> = React.memo(({ blok }) => {
  const { slides = [], socials = [] } = blok;
  const swiperRef = React.useRef<any>();

  return (
    <Swiper
      //@ts-ignore
      ref={swiperRef}
      centeredSlides={true}
      loop
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
      {...storyblokEditable(blok)}
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      {slides.map((nestedBlok: any) => (
        <SwiperSlide key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} />
        </SwiperSlide>
      ))}
      <NavigationControls />
    </Swiper>
  );
});

export default Carousel;
