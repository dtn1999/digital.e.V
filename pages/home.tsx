import Layout from "../components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import { NextPage } from "next/types";

const Home: NextPage<any> = ({ story }) => {
  story = useStoryblokState(story, { customParent: "http://localhost:3000" });

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
};

export default Home;

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
