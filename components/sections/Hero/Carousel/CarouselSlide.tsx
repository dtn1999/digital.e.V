import React from "react";
import cn from "classnames";
import { useSwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import NavigationControls from "./NavigationControls";
import { container, fadeInOut } from "../../../../animations";
import Headline from "../../../Blocks/Headline";
import Button from "../../../common/Button";

const CarouselSlide: React.FC<any> = React.memo(
  ({ image, title, description, cta, id, headline }) => {
    const { isActive } = useSwiperSlide();
    const router = useRouter();
    const handleClick = React.useCallback(
      (to: string) => {
        console.log("to", to);
        router.push(`/${to.replace(/\//g, "")}`);
      },
      [router]
    );

    return (
      <div className="relative grid h-full w-full grid-cols-1 px-5  md:px-20">
        <div className="flex h-full w-full flex-col justify-start pt-5 md:pt-24">
          {isActive && (
            <motion.div
              key={id}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute z-50 mx-auto grid w-full grid-cols-3  text-white sm:max-w-sm md:max-w-md md:px-8 lg:max-w-lg xl:max-w-xl"
            >
              <div className="col-span-2">
                <motion.div
                  variants={fadeInOut}
                  className="md:my-5 lg:max-w-4xl"
                >
                  <Headline value={headline || ""} />
                </motion.div>
                <motion.p
                  variants={fadeInOut}
                  className="my-5 text-lg lg:pr-[10%]"
                >
                  <p className="text-sm font-light leading-relaxed text-white md:text-xl">
                    {description.content}
                  </p>
                </motion.p>
                <motion.div
                  variants={fadeInOut}
                  className="mt-9 flex justify-start space-x-8"
                >
                  <Button
                    onClick={() => handleClick((cta.link as any).slug)}
                    className="space-x-1 bg-accent text-xs font-medium text-white"
                    variant="solid"
                  >
                    <span className="text-primary">{cta.label}</span>
                    <BsChevronRight className="text-primary" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
        <div className="absolute h-full w-full">
          <Image
            src={image.url}
            alt={image.alt || image.url}
            objectPosition="center"
            objectFit="cover"
            layout="fill"
          />
          <div className={cn("absolute inset-0 z-20 bg-black/70")} />
          <NavigationControls />
        </div>
      </div>
    );
  }
);
export default CarouselSlide;
