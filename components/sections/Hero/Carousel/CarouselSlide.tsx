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

interface Props {
  blok: any;
}
const CarouselSlide: React.FC<Props> = React.memo(({ blok }) => {
  const { image, description, cta, id, title } = blok;
  const { isActive } = useSwiperSlide();
  const router = useRouter();
  const handleClick = React.useCallback(
    (to: string) => {
      router.push(`/${to.replace(/\//g, "")}`);
    },
    [router]
  );

  return (
    <div className="relative grid h-full w-full grid-cols-1 px-5  md:px-20">
      <div className="flex h-full w-full flex-col justify-start pt-5 md:pt-32">
        {isActive && (
          <motion.div
            key={id}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute z-50 mx-auto w-full text-white sm:max-w-sm md:max-w-md  md:px-[247px] lg:max-w-lg xl:max-w-xl"
          >
            <div className="bg-green-300">
              <motion.div variants={fadeInOut} className="md:my-5 lg:max-w-4xl">
                <Headline value={title} />
              </motion.div>
              <motion.p
                variants={fadeInOut}
                className="my-5 text-lg lg:pr-[10%]"
              >
                <p className="text-sm font-light leading-relaxed text-white md:text-xl">
                  {description}
                </p>
              </motion.p>
              <motion.div
                variants={fadeInOut}
                className="mt-9 flex justify-start space-x-8"
              >
                <Button
                  onClick={() =>
                    handleClick((cta.link?.internal?.slug as string) || "")
                  }
                  className="space-x-1 bg-primary text-xs font-medium text-white"
                  variant="solid"
                >
                  <span className="text-white">{cta.link?.label}</span>
                  <BsChevronRight className="text-white" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="absolute h-full w-full">
        <Image
          src={image.filename}
          alt={image.filename || image.filename}
          objectPosition="center"
          objectFit="cover"
          layout="fill"
        />
        <div className={cn("absolute inset-0 z-20 bg-black/70")} />
        <NavigationControls />
      </div>
    </div>
  );
});
export default CarouselSlide;
