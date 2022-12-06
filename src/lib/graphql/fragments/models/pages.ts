import { gql } from "graphql-request";
import { CollaboratorSectionFragment } from "@app/requests-fragments/components/collaboratorSection";
import { SectionWithImageFragment } from "@app/requests-fragments/components/sectionWithImage";
import { ServiceSectionFragment } from "@app/requests-fragments/components/serviceSection";
import { TeamSectionFragment } from "@app/requests-fragments/components/teamSection";
import { TestimonialSectionFragment } from "@app/requests-fragments/components/testimonialSection";
import { BannerFragment } from "@app/requests-fragments/models/banner";
import { CarouselFragment } from "@app/requests-fragments/models/carousel";
import { SeoFragment } from "@app/requests-fragments/models/seo";
import { AssetFragment } from "./assets";
import { ButtonFragment } from "../components/callToAction";
import { PageRichTextContentFragment } from "./richtext";
import { AccordionFragment, TabFragment, CountUpFragment, ParagraphFragment, MultiColumnFragment } from "../components/blocks";
import { ProjectSectionFragment } from "../components/projectSection";
import { ProjectCardFragment } from "./projects";

export const PageSlugFragment = gql`
fragment PageSlug on Page {
   id
   slug  
}
`
export const SinglePageFragment = gql`
fragment Page on Page {
  id
  slug
  typename:__typename
  seo {
   ...Seo
  }
  slug
  navigationLabel
  hero {
    ... Hero
  }
  sections {
    backgroundColor
    isFormMainComponent
    component {
      typename:__typename
      ...SectionComponentUnion
    }
  }  
  pageRichTextContent {
    content {
       ...PageRichTextContent     
    }
  }
}

fragment Hero on PageHero {
	typename:__typename
	... on Banner {
    ...Banner
  }
  ... on Carousel {
    ...Carousel
  }
}

fragment SectionComponentUnion on SectioncomponentUnion {
  ... on CollaboratorSection {
    typename:__typename
    id
    ...CollaboratorSection
  }
  ... on SectionWithImage {
    typename:__typename
    id
    ...SectionWithImage
  }
  ... on ServiceSection {
    typename:__typename
    id
    ...ServiceSection
  }
  ... on TeamSection {
    typename:__typename
    id
    ...TeamSection
  }
  ... on ProjectSection {
    typename:__typename
    id
    ...ProjectSection
  }
  ... on TestimonialSection {
    typename:__typename
    id
    ...TestimonialSection
  }
  ... on PageRichTextContent {
    typename:__typename

  }
}


# components
${AssetFragment}
${AccordionFragment}
${TabFragment}
${CountUpFragment}
${ParagraphFragment}
${MultiColumnFragment}
${ButtonFragment} 
${SeoFragment}
${BannerFragment}
${CarouselFragment}
${CollaboratorSectionFragment}
${SectionWithImageFragment}
${ServiceSectionFragment}
${TeamSectionFragment}
${ProjectSectionFragment}
${ProjectCardFragment}
${TestimonialSectionFragment}
${PageRichTextContentFragment}
`