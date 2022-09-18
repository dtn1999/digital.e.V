import { gql } from "graphql-request"
import { ProjectCardFragment } from "../../fragments/projects"

export const FILTER_PROJECTS_QUERY = gql`
query FilterProjectByCategoryOrCollaborator(
  $locale: Locale!, 
  $where: ProjectWhereInput,
	$first: Int,
  $skip: Int
){
  projectsConnection(locales: [$locale] ,first: $first, skip: $skip, where: $where){
    edges {
      cursor
      node {
        ...Project
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

${ProjectCardFragment}
` 