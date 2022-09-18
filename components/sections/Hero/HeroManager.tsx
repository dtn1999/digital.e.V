import React from "react";
import { BannerFragment, CarouselFragment, PageHero } from "@app/types/graphql";
import dynamic from "next/dynamic";

// some dynamic imports
const Carousel = dynamic(() => import("../../../components/sections/Carousel"));
const Banner = dynamic(() => import("./Banner"));

// internal component types
type HeroTypenameUnion = Required<Pick<PageHero, "__typename">>["__typename"];

interface Props {
  typename: HeroTypenameUnion;
  data: CarouselFragment | BannerFragment;
}

const HeroManager: React.FC<Props> = React.memo(({ typename, data }) => {
  switch (typename) {
    case "Carousel":
      return (
        <Carousel key={data.id} slides={(data as CarouselFragment).slides} />
      );
    case "Banner":
      return <Banner key={data.id} {...(data as BannerFragment)} />;
  }
});
export default HeroManager;
