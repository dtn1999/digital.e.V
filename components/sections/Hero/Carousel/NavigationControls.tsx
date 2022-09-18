import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

interface Props extends BaseProps {
  arrowStyle?: string;
  arrowHoverStyle?: string;
}

const NavigationControls: React.FC<Props> = React.memo(
  ({ arrowHoverStyle, arrowStyle }) => {
    const swiper = useSwiper();

    const handleSlidePrev = React.useCallback(() => {
      swiper.slidePrev();
    }, [swiper]);
    const handleSlideNext = React.useCallback(() => {
      swiper.slideNext();
    }, [swiper]);

    return (
      <div
        className={cn({
          "absolute  bottom-7 right-5 z-50 mt-5 flex-row justify-between text-xl font-medium md:flex":
            true,
          "text-white": !arrowStyle,
          [arrowStyle || ""]: true,
        })}
      >
        <button
          aria-label="navigation previous slide"
          className={cn({
            "mx-1 cursor-pointer": true,
            "hover:text-primary-dark": !arrowHoverStyle,
            [arrowHoverStyle || ""]: true,
          })}
          onClick={handleSlidePrev}
        >
          <BsChevronLeft />
        </button>
        <button
          aria-label="navigation next slide"
          onClick={handleSlideNext}
          className={cn({
            "mx-1 cursor-pointer": true,
            "hover:tex!t-primary-dark": !arrowHoverStyle,
            [arrowHoverStyle || ""]: true,
          })}
        >
          <BsChevronRight />
        </button>
      </div>
    );
  }
);
export default NavigationControls;
