import { gql } from "graphql-request";
import { TestimonialFragment } from "../models/testimonials";


export const TestimonialSectionFragment = gql`
fragment TestimonialSection on TestimonialSection {
    id
    typename:__typename
    title:headline
    testimonials {
      ...Testimonial
    }
}
${TestimonialFragment}
`;