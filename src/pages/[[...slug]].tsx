import { createStoryClient } from "@app/lib/clients/storyblok";
import { PageProps } from "@app/types";
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from "@storyblok/react";
import { gql } from "graphql-request";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import LoadingScreen from "src/components/common/LoodingScreen";
import NextSplashScreen from "src/components/common/NextSpashScreen";
interface Props extends PageProps {
  story: any;
}

const DynamicPage: NextPage<Props> = ({ story }) => {
  const editableContent = useStoryblokState<any>(story, {
    resolveRelations: [
      "FeaturedProjects.projects, FeaturedMembers.members, CollaboratorsCarousel.collaborators",
      "Service.projects",
      "Collaborator.projects",
    ],
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <NextSplashScreen
        loading={loading}
        setLoading={setLoading}
        component={<LoadingScreen />}
      />
      <StoryblokComponent blok={editableContent.content} />
    </React.Fragment>
  );
};
export default DynamicPage;
export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const { slug } = params as any;
  const querySlug = slug === undefined ? "pages/home" : slug.join("/");

  const sbParams = {
     version: preview ? "draft" : "published", //for when we will start publishing
    //version: "draft",
    resolve_relations: [
      "FeaturedProjects.projects",
      "FeaturedMembers.members",
      "CollaboratorsCarousel.collaborators",
      "PartnersAndSponsors.collaborators",
      "Collaborator.projects",
      "Collaborator.events",
      "Service.projects",
      "Service.events",
    ],
  };

  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${querySlug}`, {
      ...sbParams,
    });

    return {
      props: {
        story: data?.story,
        key: data?.story?.id,
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
      props: {
        query: querySlug,
        message: error.message,
      },
      revalidate: 3600,
    };
  }
};

const LinksQuery = gql`
  query {
    Links {
      items {
        id
        slug
        isFolder
        name
        uuid
        published
      }
    }
  }
`;

interface LinkItem {
  id: string;
  slug: string;
  isFolder: boolean;
  name: string;
  uuid: string;
  published: boolean;
}

const fetchLinks = async (preview?: boolean): Promise<LinkItem[]> => {
  const StoryblokApi = createStoryClient(preview);
  const {
    Links: { items: links },
  } = await StoryblokApi.request(LinksQuery);
  return links;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const links = await fetchLinks();

  const isValidPath = (link: LinkItem) => {
    if (link.isFolder) return false;
    if (
      link.slug.startsWith("categories") ||
      link.slug.startsWith("forms") ||
      link.slug.startsWith("members") ||
      link.slug.startsWith("social-handles") ||
      link.slug.startsWith("layout")
    ) {
      return false;
    }
    return true;
  };
  const paths = links
    .filter(isValidPath)
    .map((link) => {
      if (link.slug.startsWith("pages/")) {
        return {
          ...link,
          as: link.slug.replace("pages/", ""),
        };
      }
      return link;
    })
    .map((link) => ({
      params: { slug: link.slug.split("/"), as: (link as any).as },
    }));

  return {
    paths: [...paths, { params: { slug: [], as: "pages/home" } }],
    fallback: false,
  };
};
