import { gql } from "graphql-request";
import { ServiceFragment } from "../models/service";

export const ServiceSectionFragment = gql`
fragment ServiceSection on ServiceSection {
  typename:__typename
  id
  headline
  backgroundColor
  services {
    ...Service
  }
  cta {
    ...Button
  }
}
${ServiceFragment}
`;