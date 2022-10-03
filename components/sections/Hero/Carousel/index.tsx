import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import CarouselSlide from "./CarouselSlide";
import { usePagination } from "../../../../hooks/usePagination";
import SocialsHandles from "../../../Blocks/SocialsHandles";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface Props {
  blok: any;
}
const Carousel: React.FC<Props> = React.memo(({ blok }) => {
  const { slides = [], socials = [] } = blok;
  console.log("blok", blok);
  // get the swiper instance
  const swiperRef = React.useRef<any>();

  // avoid re-rendering the Carousel component because of object ref difference
  const pagination = usePagination("paginationCarousel");

  return (
    <div className="relative h-full  w-full bg-primary">
      <Swiper
        //@ts-ignore
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        className="relative h-full w-full"
      >
        {slides.map((item: any) => (
          <SwiperSlide key={item.id} className="relative h-full w-full">
            <CarouselSlide key={item.id} blok={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default Carousel;
