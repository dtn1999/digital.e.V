import "../styles/tailwind.css";
import "../styles/ReactSwipper.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";

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

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { locale } = appContext.ctx;
  const { data } = await getStoryblokApi().get("cdn/links/", {
    starts_with: "pages/",
    version: "draft",
  });

  if (!data || !data.links) return { paths: [], fallback: false };

  const paths = Object.keys(data.links)
    .map((linkKey) => data.links[linkKey].slug)
    .map((absolutePath: string) => absolutePath.replace("pages/", ""))
    .map((slug: string) => {
      return { params: { slug: slug === "home" ? [] : [slug] } };
    });

  return {
    ...appProps,
    pageProps: {
      layout: {},
    },
  };
};

export default MyApp;
