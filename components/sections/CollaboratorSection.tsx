import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Autoplay]);
const CollaboratorsSection: React.FC<any> = React.memo(
  ({ collaborators = [] }) => {
    return (
      <Swiper
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        loopFillGroupWithBlank={true}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="relative h-full w-full px-4"
      >
        {(collaborators as any).map(({ logo, id }: any) => (
          <SwiperSlide
            key={id}
            className="my-10 flex h-full w-full items-center justify-center"
          >
            <Link href="/partners-and-sponsors">
              <a>
                <div className="relative h-[79px] w-[186px]">
                  <Image
                    src={logo.url}
                    layout="fill"
                    objectFit="contain"
                    alt={logo.alt}
                  />
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);
export default CollaboratorsSection;
