import { gql } from "graphql-request";
import { AssetFragment } from "../../fragments/models/assets";
import { SinglePageFragment } from "../../fragments/models/pages";
import { ProjectCardFragment, ProjectFragment } from "../../fragments/models/projects";

export const ProjectsPageContentQuery = gql`
query getProjectsPageContent($slug: String!, $locale: Locale!){
    page(where: {slug: $slug}, locales: [$locale]){
        ...Page
    }
    projects(locales: [$locale]){
        ...ProjectCard
    }
    categories(locales: [$locale]){
        id
        name
    }
    collaborators(locales: [$locale]){
        id
        name
    }
}
${SinglePageFragment}
${ProjectCardFragment}
`

export const ProjectPageContentQuery = gql`
query getProjectsSimplePageContent($slug: String!, $locale: Locale!, $projectSlug: String!){
    page(where: {slug: $slug}, locales: [$locale]){
        ...Page
    }
    project(locales: [$locale], where: {slug: $projectSlug}){
        ...Project
    }
    categories(locales: [$locale]){
        id
        name
    }
}
${SinglePageFragment}
${ProjectFragment}
`

export const ProjectFilterQuery = gql`
query FilterProject(
  $locale: Locale!, 
  $where: ProjectWhereInput,
  $first: Int,
  $skip: Int
){
  projectsConnection(locales: [$locale] ,first: $first, skip: $skip, where: $where){
    edges {
      cursor
      node {
        ...ProjectCard
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
  }
}

${AssetFragment}
${ProjectCardFragment}
` 

export const ProjectsByCreatedAtQuery = gql`
  query GetProjectByCreatedAt($locale: Locale!, $where: ProjectWhereInput, $orderBy: ProjectOrderByInput) {
    resources:projects(locales: [$locale], where: $where, orderBy: $orderBy, first: 1) {
      slug
    }
  }
`