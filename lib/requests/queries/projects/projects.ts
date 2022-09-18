
import { gql } from "graphql-request";
import { SEOFragment } from "../../fragments/pages";


export const PROJECT_BY_CREATED_AT_QUERY = gql`
  query GetProjectByCreatedAt($locale: Locale!, $where: ProjectWhereInput, $orderBy: ProjectOrderByInput) {
    resources:projects(locales: [$locale], where: $where, orderBy: $orderBy, first: 1) {
      slug
    }
  }
`

export const GET_SINGLE_PROJECT_QUERY = gql`
query GetProjectBySlugAndLocale($locale: Locale!, $slug: String!) {
    page(locales: [$locale], where: {slug: "projects"}) {
        seo {
            ...Seo
        }
    }
    project(locales: [$locale], where: {slug: $slug}) {
        id
        createdAt
        name
        slug
        image:featuredImage(locales: en){
        url
        alt:fileName
        }
        description {
            json
        }

    }
  categories(locales: [$locale]) {
    id
    name
  }
   collaborators(locales: [$locale]) {
    id
    name
   } 
}
${SEOFragment}
`


export const PROJECTS_QUERY = gql`
query GetProjectsByLocale($locale: Locale!){
    page(locales: [$locale], where: {slug: "events"}) {
        seo {
            ...Seo
        }
    }
    projects(locales: [$locale]) {
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
  categories(locales: [$locale]) {
    id
    name
  }
   collaborators(locales: [$locale]) {
      id
      name 
   } 
}
${SEOFragment}
`

export const PROJECT_SLUGS_QUERY = gql`
query GetProjectSlugs{
    projects{
        slug
    }   
}
`