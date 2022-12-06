import { gql } from "graphql-request";
import { LayoutFragment } from "../../fragments/models/layout";
import { SocialHandlesFragment } from "../../fragments/models/socialHandles";
import { VkiiGeneralDetailsFragment } from "../../fragments/models/vkiiGeneralDetails";


export const PageLayoutQuery = gql`
query getPageLayout($locale: Locale!){
    layouts(locales: [$locale]){
        ...Layout
    }
    associationDetailss(locales: en){
        ...VkiiGeneralInformation
    }
}
${LayoutFragment}
${SocialHandlesFragment}
${VkiiGeneralDetailsFragment}
`