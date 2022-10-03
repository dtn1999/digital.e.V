import React from "react";
import dynamic from "next/dynamic";

// some dynamic imports
const Carousel = dynamic(() => import("./Carousel"));
const Banner = dynamic(() => import("./Banner"));

// internal component types

const HeroManager: React.FC<any> = React.memo(({ typename, data }) => {
  const heroComponent = React.useMemo(() => {
    switch (typename) {
      case "Carousel":
        return <Carousel key={data.id} slides={(data as any).slides} />;
      case "Banner":
        return <Banner key={data.id} {...(data as any)} />;
      default:
        return (
          <React.Fragment>
            <h1>Hero Manager</h1>
          </React.Fragment>
        );
    }
  }, [typename, data]);
  return <div className="h-full w-full bg-sky-500">{heroComponent}</div>;
});
export default HeroManager;
