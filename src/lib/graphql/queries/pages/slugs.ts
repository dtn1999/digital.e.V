import { gql } from "graphql-request";
import { PageSlugFragment } from "../../fragments/models/pages";

export const DynamicPageSlugQuery = gql`
query getDynamicPageSlugs{
     pages(where: {
       slug_not_in: ["events", "contact", "become-member", "projects", "partners-and-sponsors"]
     }){
        ...PageSlug
    }
}
${PageSlugFragment}
`