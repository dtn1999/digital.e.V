import { gql } from "graphql-request";

export const ProjectCardFragment = gql`
fragment Project on Project {
    id
    name
    slug
    image:featuredImage(locales: en){
        url
        alt:fileName
    }
    description {
        text
    }
}
`

export const ProjectWithDescriptionFragment = gql`
fragment ProjectWithDescription on Project {
  id
  name
  slug
  image:featuredImage(locales: en){
    url
    fileName
  }
  description {
    json
  }
  collaborators {
    image:logo(locales: en){
      url
      fileName
    }
  }
  categories(locales: en) {
    id
    name
  }
}
`
