import React from "react";
import dynamic from "next/dynamic";

// some dynamic imports
const Carousel = dynamic(() => import("./Carousel"));
const Banner = dynamic(() => import("./Banner"));

// internal component types

const HeroManager: React.FC<any> = React.memo(({ blok }) => {
  const {
    heroComponent: [{ component, ...data }],
  } = blok;
  console.log("blok", blok);
  const heroComponent = React.useMemo(() => {
    switch (component) {
      case "Carousel":
        return <Carousel key={data.id} slides={(data as any).slides} />;
      case "Banner":
        return <Banner key={data.id} {...(data as any)} />;
      case "VideoHero":
        return <div>VideoHero</div>;
      default:
        return (
          <React.Fragment>
            <h1>Hero Manager</h1>
          </React.Fragment>
        );
    }
  }, [component, data]);
  return <div className="h-full w-full bg-sky-500">{heroComponent}</div>;
});
export default HeroManager;
