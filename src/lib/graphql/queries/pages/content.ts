import { gql } from "graphql-request";
import { SinglePageFragment } from "../../fragments/models/pages";

export const PageContentQuery = gql`
query getPageContent($slug: String!, $locale: Locale!){
    page(where: {slug: $slug}, locales: [$locale]){
        ...Page
    }
}
${SinglePageFragment}
`