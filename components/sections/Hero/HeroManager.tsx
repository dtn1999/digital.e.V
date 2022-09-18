import React from "react";
import dynamic from "next/dynamic";

// some dynamic imports
const Carousel = dynamic(() => import("./Carousel"));
const Banner = dynamic(() => import("./Banner"));

// internal component types

const HeroManager: React.FC<any> = React.memo(({ typename, data }) => {
  switch (typename) {
    case "Carousel":
      return <Carousel key={data.id} slides={(data as any).slides} />;
    case "Banner":
      return <Banner key={data.id} {...(data as any)} />;
    default:
      return <React.Fragment></React.Fragment>;
  }
});
export default HeroManager;
