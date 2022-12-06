import { gql } from "graphql-request";
import { CollaboratorFragment } from "../fragments/models/collaborator";


export const CollaboratorsQuery = gql`
query GetCollaboratorCards($locale:Locale!){
    collaborators(locales:[$locale]){
        ...CollaboratorCard
    }
}
${CollaboratorFragment}
`;