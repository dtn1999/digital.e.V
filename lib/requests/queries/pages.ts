import { gql } from "graphql-request";
import { BannerFragment, CarouselFragment } from "../fragments/heroSection";
import {SEOFragment} from "../fragments/pages";
import { SectionFragment } from "../fragments/sections";

export const GET_PAGE_SLUGS = gql`
query  GetPageSlugs {
  pages(where: {
    slug_not_in: ["events", "contact", "become-member", "projects", "partners-and-sponsors"]
  }) {
    id
    slug 
  }
}
`

export const GET_PAGE_BY_SLUG_AND_LOCALE = gql`
query GetPageBySlugAndLocale($slug: String!, $locale: Locale!) {
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
    sections {
      __typename
      ... on Section {
        ...Section
      }
    }
    content {
      json
    }
  }
}

${CarouselFragment}
${BannerFragment}
${SectionFragment}
${SEOFragment}
`
