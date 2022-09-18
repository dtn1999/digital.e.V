import { gql } from "graphql-request";


export const GET_COLLABORATORS = gql`
query GetCollaboratorsByLocale($locale: Locale!) {
    collaborators(locales: [$locale]) {
        id
        name
        logo(locales:en){
            url
            alt:fileName
         }
        description
    }
}
`