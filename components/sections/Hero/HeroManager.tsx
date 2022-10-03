import React from "react";
import dynamic from "next/dynamic";
import VideoHero from "./VideoHero";

// some dynamic imports
const Carousel = dynamic(() => import("./Carousel"));
const Banner = dynamic(() => import("./Banner"));

// internal component types

const HeroManager: React.FC<any> = React.memo(({ blok }) => {
  const {
    heroComponent: [componentBlock],
  } = blok;
  const { component, ...data } = componentBlock;
  console.log("blok", blok);
  const heroComponent = React.useMemo(() => {
    switch (component) {
      case "Carousel":
        return <Carousel key={data.id} blok={componentBlock} />;
      case "Banner":
        return <Banner key={data.id} blok={componentBlock} />;
      case "VideoHero":
        return <VideoHero blok={componentBlock} />;
      default:
        return (
          <React.Fragment>
            <h1>Hero Manager</h1>
          </React.Fragment>
        );
    }
  }, [component, data, componentBlock]);
  return <div className="h-full w-full bg-sky-500">{heroComponent}</div>;
});
export default HeroManager;
