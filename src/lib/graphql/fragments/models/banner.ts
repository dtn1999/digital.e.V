import { gql } from "graphql-request";
import { ButtonFragment } from "@app/requests-fragments/components/callToAction";
import { AssetFragment } from "@app/requests-fragments/models/assets";

export const BannerFragment = gql`
fragment Banner on Banner {
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
`;