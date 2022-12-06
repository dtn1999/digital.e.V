import { gql } from "graphql-request";

export const TestimonialFragment = gql`
fragment Testimonial on Testimonial {
  id
  typename:__typename
  author
  position
  message
  authorPicture(locales: en) {
    ...Asset
  }
}
`