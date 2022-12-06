import { gql } from "graphql-request";

export const CategoryFragment = gql`
fragment Category on Category {
  name
  description {
    text
  }
  events {
    id
    slug
  }
  projects {
    id
    slug
  }
}
`