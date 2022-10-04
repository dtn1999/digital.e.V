import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import Image from "next/image";
import { usePagination } from "../../hooks/usePagination";
import NavigationControls from "./Hero/Carousel/NavigationControls";
import { BaseBlokProps } from "../../types/global";
import Container from "../common/Container";
import Headline from "../Blocks/Headline";

interface Props {
  testimonials: any[];
}

SwiperCore.use([Autoplay, Pagination]);
const SectionTestimonial: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  const { testimonials = [], headline } = blok;
  const pagination = usePagination();
  return (
    <Container className="max-h-[600px]">
      <div className="flex flex-col items-center">
        {headline && (
          <Headline value={headline} underline underlineAlign="center" />
        )}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={testimonials.length > 0}
          autoplay={{
            delay: 9000,
          }}
          pagination={pagination}
          loopFillGroupWithBlank={true}
          className="relative h-full w-full px-4 mt-5 mb-10"
        >
          {testimonials.map((testimonial: any) => (
            <SwiperSlide
              key={testimonial.id}
              className="relative h-full w-full"
            >
              <div className="grid grid-cols-1 bg-secondary md:grid-cols-2">
                <div className="relative h-[600px] w-full">
                  <Image
                    alt={testimonial.author}
                    src={testimonial.image.filename}
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
                      {testimonial.message}
                    </p>
                    <h4 className="my-4 text-lg font-bold">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm font-light">{testimonial.position}</p>
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
      </div>
    </Container>
  );
});
export default SectionTestimonial;
