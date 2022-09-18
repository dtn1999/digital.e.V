import { gql } from "graphql-request";
import { FormFragment } from "./form";

export const SectionWithImageFragment = gql`
fragment SectionWithImage on SectionWithImage {
  id
  imagePosition
  backgroundColor
  image(locales: en) {
    url
    alt
  }
  title {
    text: value {
      id
      value
    }
  }
  cta {
    label
    internal {
      ... on Page {
        slug
      }
      ... on Event {
        slug
      }
      ... on Project {
        slug
      }
    }
  }
  blocks {
    typename: __typename
    ... on Paragraph {
      id
      value
    }
    ... on MultiColumn {
			id
      columns {
        ... on Column {
          typename: __typename
          title
          titleOnBottom
          blocks {
            typename: __typename
            ... on Paragraph {
              value
            }
            ... on CountUp {
              end: value
            }
          }
        }
      }
    }
    ... on Accordion {
      id
      items {
        id
        summary
        details
        description
      }
    }
    ... on Tab {
      id
      tabs {
        id
        title
        content
      }
    }
  }
}
`

export const SectionCurrentProjectsFragment = gql`
fragment SectionCurrentProject on SectionCurrentProject {
  id
  projects {
    id
    name
    slug
    image:featuredImage (locales: en){
      url
      alt:fileName
    }
  }
}
`

export const SectionServicesFragment = gql`
fragment SectionService on SectionService {
  id
  services {
    id
    name
    description
    icon
  }
}
`

export const SectionAdministrativeTeamFragment = gql`
fragment SectionAdministrativeTeam on SectionAdministrativeTeam {
  id
  team {
    id
    name
    profileImage(locales: en) {
      url
      alt
    }
    position
    description
  
  }
}
`

export const SectionCollaboratorsFragment = gql`
fragment SectionCollaborator on SectionCollaborator {
  id
  collaborators {
    id
    logo(locales: en) {
      url
      alt: fileName
    }
  }
}
`

export const SectionTestimonialsFragment = gql`
fragment SectionTestimonial on SectionTestimonial {
  id
  testimonials {
    id
    author
    message
    position
    image:profileImage(locales: en) {
      url
      alt:fileName
    }
  }
}
`

export const SectionFragment = gql`
fragment Section on Section {
  id
  backgroundColor
  title {
    id
    text:value {
      id
      value
    }
  }
  type {
    typename: __typename
    ... on SectionWithImage {
      ...SectionWithImage
    }
    ... on SectionCurrentProject {
      ...SectionCurrentProject
    }
    ... on SectionAdministrativeTeam {
      ...SectionAdministrativeTeam
    }
    ... on SectionCollaborator {
      ...SectionCollaborator
    }
    ... on SectionService {
      ...SectionService
    }
    ... on SectionTestimonial{
      ...SectionTestimonial
    }
  }
}
${SectionWithImageFragment}
${SectionCurrentProjectsFragment}
${SectionAdministrativeTeamFragment}
${SectionServicesFragment}
${SectionCollaboratorsFragment}
${SectionTestimonialsFragment}
`