import { gql } from "graphql-request";

export const SeoFragment = gql`
fragment Seo on Seo {
  id
  typename:__typename
  title
  description
  image(locales: en) {
    ...Asset
  }
}
`;