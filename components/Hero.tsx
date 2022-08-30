import React from "react";
import { storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import ReactPlayer from "react-player";
interface Props {
  blok: any;
}
const HeroSection: React.FC<Props> = React.memo(({ blok }) => {
  console.log("block properties ", blok);
  return (
    <div
      className={cn("relative w-hull h-[70%] bg-sky-800")}
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
        url="https://player.vimeo.com/external/541751571.hd.mp4?s=53b19cc6a2c6d411ce5856b33280c74d85094898&profile_id=175&oauth2_token_id=57447761"
        loop
        muted
        playing
      />
    </div>
  );
});
export default HeroSection;
