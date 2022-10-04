import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import Image from "next/image";
import { usePagination } from "../../hooks/usePagination";
import NavigationControls from "./Hero/Carousel/NavigationControls";
import { BaseBlokProps } from "../../types/global";
import Container from "../common/Container";

interface Props {
  testimonials: any[];
}

SwiperCore.use([Autoplay, Pagination]);
const SectionTestimonial: React.FC<BaseBlokProps> = React.memo(({ blok }) => {
  const { testimonials = [] } = blok;
  const pagination = usePagination();
  return (
    <Container className="bg-primary max-h-[600px]">
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
        className="relative h-full w-full px-4"
      >
        {testimonials.map((testimonial: any) => (
          <SwiperSlide key={testimonial.id} className="relative h-full w-full">
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
    </Container>
  );
});
export default SectionTestimonial;
