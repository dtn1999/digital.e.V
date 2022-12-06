import { gql } from "graphql-request";
import { SinglePageFragment } from "../../fragments/models/pages";
import { SocialHandlesFragment } from "../../fragments/models/socialHandles";
import { VkiiGeneralDetailsFragment } from "../../fragments/models/vkiiGeneralDetails";

export const ContactPageContentQuery = gql`
query getContactPageContent($slug: String!, $locale: Locale!){
    page(where: {slug: $slug}, locales: [$locale]){
        ...Page
    }
    associationDetailss(locales: [$locale]){
        ...VkiiGeneralInformation
    }
}
${SinglePageFragment}
${SocialHandlesFragment}
${VkiiGeneralDetailsFragment}
`