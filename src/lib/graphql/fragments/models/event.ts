import { gql } from "graphql-request";
import { AssetFragment } from "@app/requests-fragments/models/assets";

export const EventCardFragment = gql`
fragment EventCard on Event {
  id
  typename:__typename
  slug
  name
  color{
    hex
  }
  start
  end
  shortDescription 
  featuredImage(locales: en){
    ...Asset
  }
}
${AssetFragment}
`


export const EventCalendarFragment = gql`
fragment EventCalendar on Event {
  id
  typename:__typename
  slug
  name
  color{
    hex
  }
  start
  end
  shortDescription
}
`;

export const EventFragment = gql`
fragment Event on Event {
  id
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
  color{
    hex
  }
  start
  end
  shortDescription
  featuredImage(locales: en){
    ...Asset
  }
  description {
    json
    references {
      ... on Page {
        id
        slug
        navigationLabel
      }
      ... on Event {
        id
        slug
        name
      }
      ... on Collaborator {
        id
        name
      }
      ... on Member {
        id
        name
        picture(locales: en){
           ...Asset
        }
      }
      ... on Service {
        id
        name
        serviceIcon:icon
      }
      ... on Project {
        id
        slug
        name
        featuredImage(locales: en){
            ...Asset
        }
      }
      ... on SocialHandle {
        id
        label
        icon
        url
      }
    }
  }
}
${AssetFragment}
`;