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
  const response = await getStoryblokApi().get("cdn/stories", {
    version: "draft",
  });
  console.log(response)
  return {
    paths: [{ params: { slug: [""] } }],
    fallback: false,
  };
};
export default Page;
