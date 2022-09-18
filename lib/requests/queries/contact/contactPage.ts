import { gql } from "graphql-request";
import { FormFragment } from "../../fragments/form";
import { BannerFragment, CarouselFragment } from "../../fragments/heroSection";
import { SEOFragment } from "../../fragments/pages";
import { SectionFragment } from "../../fragments/sections";


export const GET_CONTACT_PAGE = gql`
query GetContactPage($slug: String!, $locale: Locale!) {
  page(locales: [$locale], where: {slug: $slug}) {
    id
    seo {
      ...Seo
    }
    hero {
      typename: __typename
      ... on Carousel {
        ...Carousel
      }
      ... on Banner {
        ...Banner
      }
    }
  }
  vkiiDetails(locales: [$locale]) {
    contactEmail
    telephone
    address
    location {
      longitude
      latitude
    }
    form {
      ...Form
    }
  }
}

${CarouselFragment}
${BannerFragment}
${SectionFragment}
${SEOFragment}
${FormFragment}
`
