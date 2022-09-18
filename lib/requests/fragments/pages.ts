import { gql } from "graphql-request";
import { FormFragment } from "./form";

export const SEOFragment = gql`
fragment Seo on Seo {
  id
  title
  description
  image(locales: en) {
    url
    alt
  }
}
`