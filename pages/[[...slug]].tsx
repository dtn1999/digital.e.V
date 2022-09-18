import React from "react";
import { getStoryblokApi } from "@storyblok/react";
import cn from "classnames";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {}

const Page: React.FC<Props> = React.memo(({}) => {
  return <div className={cn("")}> Page </div>;
});

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
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

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
export default Page;
