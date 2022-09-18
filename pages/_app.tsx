import React from "react";
import "../styles/tailwind.css";
import "../styles/ReactSwipper.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import NextSplashScreen from "../components/pages/LoadingScreen";
import LoadingScreen from "../components/pages/LoadingScreen/LoadingScreen";
import PageWrapperComponent from "../components/pages/Page";
import VideoHero from "../components/sections/Hero/VideoHero";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const components = {
  page: PageWrapperComponent,
  VideoHeroComponent: VideoHero,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <NextSplashScreen
        loading={loading}
        setLoading={setLoading}
        component={<LoadingScreen />}
      />
      <AnimatePresence exitBeforeEnter>
        {!loading && (
          <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
            className="h-full w-full"
          >
            <Component {...pageProps} />
          </motion.main>
        )}
      </AnimatePresence>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { locale } = appContext.ctx;

  const { data } = await getStoryblokApi().get("cdn/links/", {
    starts_with: "pages/",
    version: "draft",
  });

  const links = Object.keys(data.links)
    .map((linkKey) => ({
      slug: data.links[linkKey].slug,
      label: data.links[linkKey].name,
    }))
    .map((link) => ({
      ...link,
      href: link.slug.replace("pages/", ""),
    }));

  console.log("data", links);
  return {
    ...appProps,
    pageProps: {
      layout: {
        navBar: {
          links,
          ctas: [],
        },
        socialHandles: [],
      },
    },
  };
};

export default MyApp;
