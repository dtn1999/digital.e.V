import { gql } from "graphql-request";
import { AssetFragment } from "./assets";


export const CollaboratorFragment = gql`
fragment CollaboratorCard on Collaborator {
  id
  typename:__typename
  logo(locales: en){
    ...AssetFragment
  }
  name
  type
  description {
    json
  }
}
fragment AssetFragment on Asset {
  id
  typename:__typename
  fileName
  url
  width
  height
}
`

export const SingleCollaboratorFragment = gql`
fragment Collaborator on Collaborator {
  id
  typename:__typename
  logo(locales: en){
    id
  }
  name
  type
  description {
    json
    references {
      ... on Project {
        id
        name
        slug
      }
      ... on Event {
        id
        name
        slug
      }
    }
  }
  projects {
    id
    slug
    name
    featuredImage(locales: en){
      ...Asset
    }
    shortDescription
  }
  events {
    id
    slug
    name
    featuredImage(locales: en){
     ...Asset
    }
    shortDescription
  }
}
`