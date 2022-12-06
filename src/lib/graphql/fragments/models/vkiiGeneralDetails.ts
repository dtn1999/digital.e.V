import { gql } from "graphql-request";
import { FormFragment } from "@app/requests-fragments/models/form";

export const VkiiGeneralDetailsFragment = gql`
fragment VkiiGeneralInformation on AssociationDetails {
  id
  typename:__typename
  logo(locales: en){
    ...Asset
  }
  slogan
  telephone
  contactEmail
  address
  location {
    latitude
    longitude
  }
  socialHandles {
    ...SocialHandle
  }
  form {
    ...Form
  }
}
${FormFragment}
`;
