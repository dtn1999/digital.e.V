import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import Image from "next/image";
import Link from "next/link";
import { CollaboratorCardFragment } from "@app/types/graphql";
import Container from "./Container";
import dynamic from "next/dynamic";

interface Props {
  blok: any;
}

SwiperCore.use([Autoplay]);

const CollaboratorsCarousel: React.FC<Props> = React.memo(({ blok }) => {
  const { collaborators = [], collaboratorPageHref } = blok;
  return (
    <Container>
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
        className="relative flex w-full overflow-hidden bg-white px-4"
      >
        {collaborators.map((collaborator: any) => (
          <SwiperSlide
            key={collaborator.id}
            className="my-10 flex w-full items-center justify-center"
          >
            <Link href={`${collaboratorPageHref.cached_url}`}>
              <a>
                <div className="relative mx-4 h-[79px] w-[186px]">
                  <Image
                    src={collaborator.content?.logo.filename}
                    layout="fill"
                    objectFit="contain"
                    alt={"logo of collaborator"}
                  />
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
});
export default CollaboratorsCarousel;
