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
  const {data }= await getStoryblokApi().get("cdn/links/", {
    starts_with: "pages/",
    version: "draft",
  });

  if(!data || !data.links) return {paths: [], fallback: false}

  const paths = data.links.map((link: any) => ({
     params: { slug: link.slug.replace("pages/", "")}
  }));

  console.log(paths)
  return {
    paths: [{ params: { slug: [""] } }],
    fallback: false,
  };
};
export default Page;
