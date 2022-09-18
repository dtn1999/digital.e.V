import React from "react";
import { getStoryblokApi } from "@storyblok/react";
import cn from "classnames";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PageProps } from "../types/global";
import Layout from "../components/layout";

interface Props {}

const Page: NextPage<PageProps & { story: string }> = React.memo(
  ({ layout, story }) => {
    const { navBar, footer, socialHandles } = layout;

    return (
      <Layout
        navBar={navBar}
        footer={footer}
        socialHandles={socialHandles}
      ></Layout>
    );
  }
);

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as any;
  const pageSlug = slug === undefined ? "home" : slug[0];
  const { data } = await getStoryblokApi().get("cdn/stories", {
    by_slugs: `pages/${pageSlug}`,
    version: "draft",
  });
  console.log("slug", data.stories[0]);
  return {
    props: {
      story: data ? data.stories[0] : false,
      key: data ? data.stories[0].id : false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
    paths,
    fallback: false,
  };
};
export default Page;
