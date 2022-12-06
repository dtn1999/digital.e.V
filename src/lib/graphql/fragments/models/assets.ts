import { gql } from "graphql-request";

export const AssetFragment = gql`
fragment Asset on Asset {
  id
  typename:__typename
  fileName
  url
  width
  height
}
`