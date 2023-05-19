import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import Image from "next/image";
import { usePagination } from "src/hooks/usePagination";
import { TestimonialSectionFragment } from "@app/types/graphql";
import Headline from "./Headline";
import NavigationControls from "./Carousel/NavigationControls";
import { storyblokEditable } from "@storyblok/react";

SwiperCore.use([Autoplay, Pagination]);

interface Props {
  blok: any;
}

const TestimonialSection: React.FC<Props> = React.memo(({ blok }) => {
  const { headline, testimonials } = blok;
  const pagination = usePagination();
  console.log(blok);
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex w-full flex-col items-center"
    >
      {headline && <Headline blok={{ value: headline }} className="mb-5" />}
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
        {testimonials.map((testimonial: any) => (
          <SwiperSlide key={testimonial._uid} className="h-full w-full">
            <div className="grid grid-cols-1 bg-secondary md:grid-cols-2">
              <div className="relative h-[600px] w-full">
                <Image
                  alt={testimonial.author}
                  src={testimonial.authorImage.filename}
                  layout="fill"
                  className="object-cover object-top"
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
  );
});
export default TestimonialSection;
