/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image";
import Button from "@app/components/common/Button/Button";
import Link from "next/link";
import { ButtonVariant } from "@app/types/graphql";
interface Props {
  slides: any[];
}
SwiperCore.use([Autoplay]);
const ExhibitionCarousel: React.FC<Props> = React.memo(({ slides = [] }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      loopFillGroupWithBlank={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="relative my-10 h-full w-full bg-black px-4"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="flex h-full w-full items-center justify-center bg-yellow-500"
        >
          <div className="absolute inset-0 z-10 flex flex-col items-center bg-black/60 text-white">
            <h6 className="mt-11 text-base font-bold">{slide.title}</h6>
            <h3 className="my-5 text-4xl font-bold">{slide.description}</h3>
            <Button variant={ButtonVariant.Outline}>
              <Link href="#">
                <a className="text-white">see more</a>
              </Link>
            </Button>
          </div>
          <div
            className="before:content-[' '] relative h-[315px] 
          w-full bg-red-400 before:absolute before:left-[50%] before:z-50 before:block before:h-[30px] before:w-1 before:bg-primary"
          >
            <Image
              src={slide.image}
              layout="fill"
              objectFit="cover"
              alt={slide.image}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
export default ExhibitionCarousel;
