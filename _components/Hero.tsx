import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { BsArrowRight } from "react-icons/bs";
import cn from "classnames";
import ReactPlayer from "react-player";
interface Props {
  blok: any;
}
const HeroSection: React.FC<Props> = React.memo(({ blok }) => {
  const videoUrl = blok.video.filename;
  const heroTitle = blok.title;
  return (
    <div
      className={cn("relative w-hull h-[100%] bg-sky-800")}
      {...storyblokEditable(blok)}
    >
      <ReactPlayer
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
        config={{
          vimeo: {
            playerOptions: {
              autoplay: true,
            },
          },
        }}
        url={videoUrl}
        loop
        muted
        playing
      />
      <div className="bg-black/60 absolute items-center top-0 left-0 w-full h-full z-10 flex">
        <div className="relative w-full max-w-7xl mx-auto">
          <h1 className="text-white text-[62px] max-w-[740px] font-bold mb-10">
            {heroTitle}
          </h1>
          <button className="flex items-center text-white bg-primary px-10 py-5 text-lg font-normal rounded-[200px] group transition-all duration-700">
            <span className="">
              <BsArrowRight className="text-4xl group-hover:translate-x-5 transition-all duration-700" />
            </span>
            <span className="first-letter:uppercase mx-5 group-hover:translate-x-2 transition-all duration-700">
              Learn more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});
export default HeroSection;
