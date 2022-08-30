import "../styles/tailwind.css";
import "../styles/ReactSwipper.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { AppProps } from "next/app";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import HeroSection from "../components/Hero";
import SectionWithImage from "../components/SectionWithImage";
import Paragraph from "../components/Paragraph";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  VideoHeroSection: HeroSection,
  SectionWithImage: SectionWithImage,
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
