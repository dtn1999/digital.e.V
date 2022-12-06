import React from "react";
import { BaseProps } from "@app/types";
import MainNavigation from "./Navigation";
import Footer from "./Footer";
import Head from "next/head";
import SEO from "../meta/Seo";

interface Props extends BaseProps {
  config: any;
}

const Layout: React.FC<Props> = React.memo(({ children, config }) => {
  const {
    HeaderMenu,
    Footer: footerLinks,
    SEO: [seo],
  } = config;
  if (!HeaderMenu) return null;
  return (
    <React.Fragment>
      <Head>{seo && <SEO seo={seo} />}</Head>
      <MainNavigation blok={HeaderMenu[0]} />
      <main className="relative flex min-h-[80vh] w-full grow flex-col overflow-x-hidden">
        {children}
      </main>
      <Footer socials={seo && seo.socials} footerLinks={footerLinks} />
    </React.Fragment>
  );
});
export default Layout;
