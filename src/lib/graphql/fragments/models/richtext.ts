import { gql } from "graphql-request";


export const PageRichTextContentFragment = gql`
fragment PageRichTextContent on PageRichTextWrapperContentRichText{
  typename:__typename
  json
  references {
    typename:__typename
    ... on Page {
      id
      slug
      navigationLabel
    }
    ... on Project {
      id
      slug
      name
    }
    ... on Event {
      id
      slug
      name
    }
    ... on Service {
      id
      name
      serviceIcon:icon
    }
    ... on SocialHandle {
      id
      icon
      url
    }
  }
}
`


export const  ProjectDescriptionRichTextFragment = gql`
fragment  ProjectDescriptionRichText on ProjectDescriptionRichText {
      typename:__typename  
      json
}
`