/* eslint-disable import/no-unresolved */
import { storyBlokFetcher } from "@app/lib";
import "@app/styles/globals.css";
import "@app/styles/ReactFullcalendar.css";
import "@app/styles/ReactSwipper.css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css";

import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";

import { SWRConfig } from "swr";
import { gql } from "graphql-request";
import Layout from "src/components/common/Layout";
import { createStoryClient } from "@app/lib/clients/storyblok";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { STORY_BLOK_COMPONENTS } from "src/components/storyblok-registry";
import { PageProps } from "@app/types";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { GOOGLE_RECAPTCHA_SITE_KEY } from "@app/utils/envVariables";

storyblokInit({
  accessToken: String(process.env.NEXT_PUBLIC_STORY_BLOK_ACCESS_TOKEN),
  use: [apiPlugin],
  components: {
    ...STORY_BLOK_COMPONENTS,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={GOOGLE_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <SWRConfig value={{ fetcher: storyBlokFetcher }}>
        <Layout config={(pageProps as PageProps).layout}>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </GoogleReCaptchaProvider>
  );
}

const LayoutQuery = gql`
  query {
    LayoutItems(resolve_relations: "SEO.socials") {
      items {
        id
        content {
          _uid
          _editable
          component
          HeaderMenu
          SEO
          Footer
        }
      }
    }
  }
`;

const StoryblokApi = createStoryClient(false);

const fetchConfig = async () => {
  const {
    LayoutItems: {
      items: [config],
    },
  } = await StoryblokApi.request(LayoutQuery);
  return config;
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { content: layout } = await fetchConfig();
  return {
    ...appProps,
    pageProps: {
      layout,
    },
  };
};
export default MyApp;
