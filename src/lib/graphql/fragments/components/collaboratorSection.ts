import { gql } from "graphql-request";
import { CollaboratorFragment } from "../models/collaborator";

export const CollaboratorSectionFragment = gql`
fragment CollaboratorSection on CollaboratorSection {
  typename:__typename
  collaborators {
    ...CollaboratorCard 
  }
}
${CollaboratorFragment}
`