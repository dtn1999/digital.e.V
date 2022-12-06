import { gql } from "graphql-request";


export const MemberFragment = gql`
fragment Member on Member {
  id
  typename:__typename
  type
  name
  position
  picture {
    ...Asset
  }
  description
}
`