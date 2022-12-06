import { gql } from "graphql-request";
import { ProjectDescriptionRichTextFragment } from "@app/requests-fragments/models/richtext";
import { AssetFragment } from "@app/requests-fragments/models/assets";

export const ProjectSlugFragment = gql`
fragment ProjectSlug on Project {
  id
  typename:__typename
  slug
}
`

export const ProjectCardFragment = gql`
fragment ProjectCard on Project {
  id
  typename:__typename
  slug
  name
  projectStatus
  shortDescription
  featuredImage(locales: en){
    ...Asset
  }
}
`


export const ProjectFragment = gql`
fragment Project on Project {
  id
  createdAt
  typename:__typename
  slug
  name
  categories {
    id
    name
  }
  collaborators {
    id
    name
  }
  start
  end
  locations {
    latitude
    longitude
  }
  projectStatus
  shortDescription
  description {
    ...ProjectDescriptionRichText
  }
  featuredImage(locales: en){
    ...Asset
  }
  gallery {
   ...Asset 
  }
  events {
    id
    name
    slug
    start
    end
    featuredImage(locales: en) {
      ...Asset
    }
  }
}
${ProjectDescriptionRichTextFragment}
`;