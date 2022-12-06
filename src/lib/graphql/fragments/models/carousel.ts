import { gql } from "graphql-request";
import { ButtonFragment } from "@app/requests-fragments/components/callToAction";
import { AssetFragment } from "@app/requests-fragments/models/assets";


export const CarouselFragment = gql`
fragment Carousel on Carousel {
  id
  typename:__typename
  slides {
    id
    typename:__typename
    headline
    description
    image(locales: en) {
      ...Asset
    }
    cta {
      ...Button
    }
  }
}
`