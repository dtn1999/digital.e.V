import Layout from "../_components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { NextPage } from "next/types";

const IndexPage: NextPage<any> = ({ story }) => {
  story = useStoryblokState(story);

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
};
export default IndexPage;

export async function getStaticProps() {
  // the slug of the story
  let slug = "home";

  let params = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}
