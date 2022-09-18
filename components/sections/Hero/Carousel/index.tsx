import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import CarouselSlide from "./CarouselSlide";
import { usePagination } from "../../../../hooks/usePagination";
import SocialsHandles from "../../../Blocks/SocialsHandles";


SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel: React.FC<any> = React.memo(
  ({ slides = [], socials = [] }) => {
    // get the swiper instance
    const swiperRef = React.useRef<any>();

    // avoid re-rendering the Carousel component because of object ref difference
    const pagination = usePagination("paginationCarousel");

    return (
      <div className="relative h-[88%]  w-full">
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
          {slides.map((item:any) => (
            <SwiperSlide key={item.id} className="relative h-full w-full">
              <CarouselSlide
                id={item.id}
                headline={item.headline}
                title={item.title}
                image={item.image}
                description={item.description}
                cta={item.cta}
              />
              <div className="absolute inset-y-0 left-0 z-[100] w-17">
                <div className="hidden h-full w-full items-center md:flex">
                  <SocialsHandles
                    socials={socials}
                    orientation="vertical"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

export default Carousel;
