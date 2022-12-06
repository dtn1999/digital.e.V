import { gql } from "graphql-request";
import { ButtonFragment } from "@app/requests-fragments/components/callToAction";
import { AssetFragment } from "@app/requests-fragments/models/assets";


export const LayoutFragment = gql`
fragment Layout on Layout {
	id
  typename:__typename
  navBar {
    logo(locales: en){
      ...Asset
    }
    links:pages {
      id
      href:slug
      navigationLabel
    }
    ctas{
      ...Button
    }
  }
}
${AssetFragment}
${ButtonFragment}
`