import { gql } from "graphql-request";


export const SocialHandlesFragment = gql`
fragment SocialHandle on SocialHandle {
  id
  typename:__typename
  label
  icon
  url
}
`