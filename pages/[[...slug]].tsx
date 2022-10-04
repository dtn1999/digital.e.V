import React from "react";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import cn from "classnames";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PageProps } from "../types/global";
import Layout from "../components/layout";
import Container from "../components/common/Container";
import ReactIconsLoader from "../components/common/ReactIconsLoader";
import { BsArrowRight } from "react-icons/bs";

interface Props {}

const Page: NextPage<PageProps & { story: any }> = React.memo(
  ({ layout, story }) => {
    const { navBar, footer, socialHandles } = layout;
    const storyParams = useStoryblokState(story);
    const [isOpen, setIsOpen] = React.useState<boolean>(true);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }
    return (
      <Layout navBar={navBar} footer={footer} socialHandles={socialHandles}>
        <div>
          <StoryblokComponent blok={story.content} />
        </div>
        <div className="bg-primary">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 py-14 text-white  ">
              <div className="mx-4 pr-10">
                <h1 className="text-4xl font-bold">
                  You want to support us or work with us?
                </h1>
              </div>
              <div className="">
                <h2>Donation account</h2>
                <p className="my-4">
                  Digitale Bildung für Alle e.V.
                  <br />
                  IBAN: DE18 2007 0024 0508 6053 00
                  <br />
                  BIC: DEUTDEDBHAM
                  <br />
                  Deutsche Bank
                </p>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=KSS7HDBDMQB3Q"
                  target="_blank my-5"
                  rel="noreferrer"
                >
                  <button className="flex items-center text-2xl">
                    <ReactIconsLoader icon="FaPaypal" className="text-white" />
                    PayPal
                  </button>
                </a>
              </div>
              <div className="">
                <div>contact</div>
                <div>
                  Digitale Bildung für Alle e.V.
                  <br />
                  Kleine Hamburger Str. 15 10117 Berlin
                  <br />
                  info@digitalebildungfueralle.org
                </div>

                <button
                  type="button"
                  onClick={openModal}
                  className="flex items-center text-primary bg-white px-10 py-5 text-lg font-normal rounded-[200px] group transition-all duration-700 my-5"
                >
                  <span className="">
                    <BsArrowRight className="text-xl group-hover:translate-x-5 transition-all duration-700" />
                  </span>
                  <span className="first-letter:uppercase mx-5 group-hover:translate-x-2 transition-all duration-700">
                    E-Mail us
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
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
