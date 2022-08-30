/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image";
import NavigationControls from "./NavigationControls";
import { usePagination } from "../../hooks/usePagination";

interface Props {
  slides: any[];
}

SwiperCore.use([Autoplay, Pagination]);
const Carousel: React.FC<Props> = React.memo(({ slides = [] }) => {
  const pagination = usePagination();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      autoplay={{
        delay: 9000,
      }}
      pagination={pagination}
      loopFillGroupWithBlank={true}
      className="relative h-full w-full px-4"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[600px] w-full">
              <Image
                alt={slide.author}
                src={slide.image.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative mx-4 h-full  pb-[80px]">
              <p className="absolute top-0 ml-8 text-[235px] font-black text-primary">
                “
              </p>
              <div className="ml-8">
                <p
                  className="after:content-[' '] mt-[200px]
                  text-lg font-light after:mt-8 after:block after:h-[1px]
                  after:w-6 after:bg-primary"
                >
                  {slide.message}
                </p>
                <h4 className="my-4 text-lg font-bold">{slide.author}</h4>
                <p className="text-sm font-light">{slide.position}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <NavigationControls
        arrowStyle="text-black"
        arrowHoverStyle="hover:text-primary"
      />
    </Swiper>
  );
});
export default Carousel;
