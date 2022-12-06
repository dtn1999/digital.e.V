import { gql } from "graphql-request";

const LinkInternalFragment = gql`
fragment InternalLink on LinkInternal {
  typename:__typename
  ... on Page {
    id
    slug
  }
  ... on Project {
    id
    slug
  }
  ... on Event {
    id 
    slug
  }
}
`

export const LinkFragment = gql`
fragment Link on Link {
  id
  typename:__typename
  label
  isExternal
  internal {
    ...InternalLink
  }
  external
}
${LinkInternalFragment}
`

export const ButtonFragment = gql`
fragment Button on Button {
  id
  typename:__typename
  theme
  variant
  link {
    ...Link
  }
}
${LinkFragment}
`
