import "../styles/tailwind.css";
import "../styles/ReactSwipper.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { AppProps } from "next/app";
import Feature from "../_components/Feature";
import Grid from "../_components/Grid";
import Page from "../_components/Page";
import Teaser from "../_components/Teaser";
import HeroSection from "../_components/Hero";
import SectionWithImage from "../_components/SectionWithImage";
import Paragraph from "../_components/Paragraph";
import Carousel from "../_components/Carousel";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  VideoHeroSection: HeroSection,
  SectionWithImage: SectionWithImage,
  Carousel: Carousel,
  Paragraph: Paragraph,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
