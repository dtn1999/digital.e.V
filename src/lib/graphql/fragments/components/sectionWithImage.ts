import { gql } from "graphql-request";

export const SectionWithImageFragment = gql`
fragment SectionWithImage on SectionWithImage {
  id
  typename:__typename
  imagePosition
  image {
    ...Asset
  }
  backgroundColor
  headline
  blocks {
    ...on Accordion { 
    typename:__typename
     ...Accordion 
    }
    ...on Tab {
    typename:__typename
     ...Tab 
    }
    ...on CountUp {
    typename:__typename
     ...CountUp 
    }
    ...on Paragraph {
    typename:__typename
     ...Paragraph 
    }
    ...on MultiColumn {
    typename:__typename
     ...MultiColumn 
    }
  }
  cta {
    ...Button
  }
}
`