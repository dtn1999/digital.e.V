import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ReactPlayer from "react-player";
import Headline from "../../Blocks/Headline";
import Container from "../../common/Container";
import StoryblokEditable from "../../StoryblokEditable";

interface Props {
  blok: any;
}

const VideoHero: React.FC<Props> = React.memo(({ blok }) => {
  const videoUrl = blok.video.filename;
  const { title: heroTitle, buttonLabel, buttonLink } = blok;
  console.log("videoUrl", blok);
  return (
    <StoryblokEditable blok={blok}>
      <ReactPlayer
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
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
      <div className="bg-black/60 items-center top-0 left-0 w-full h-full z-10 flex">
        <Container className="w-full">
          <Headline
            value={heroTitle}
            className="text-white mb-10 md:my-5 lg:max-w-4xl"
          />
          {/* <h1 className="text-white text-[62px] max-w-[740px] font-bold mb-10">
            {heroTitle}
          </h1> */}
          <button className="flex items-center text-white bg-primary px-10 py-5 text-lg font-normal rounded-[200px] group transition-all duration-700">
            <span className="">
              <BsArrowRight className="text-4xl group-hover:translate-x-5 transition-all duration-700" />
            </span>
            <span className="first-letter:uppercase mx-5 group-hover:translate-x-2 transition-all duration-700">
              {buttonLabel}
            </span>
          </button>
        </Container>
      </div>
    </StoryblokEditable>
  );
});
export default VideoHero;
