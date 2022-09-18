import { 
    FILTER_PROJECTS_QUERY } from "@app/lib/requests/queries/projects/filtering";

import { 
    FilterProjectByCategoryOrCollaboratorQuery, 
    ProjectFragment, 
    ProjectWhereInput 
} from "@app/types/graphql";

import React from "react";
import useSWR from "swr";


interface UseProjectParams {
  selectedCategories: string[];
  selectedCollaborators: string[];
  first: number;
  skip: number;
}

const generateFilterQuery = (params: UseProjectParams) => {
  const { selectedCategories, selectedCollaborators } = params;
  let whereClause: ProjectWhereInput | undefined;
  if (selectedCategories.length !== 0 && !selectedCollaborators) {
    whereClause = {
      AND: [
        {
          categories_some: {
            name_in: selectedCategories,
          },
          collaborators_some: {
            name_in: selectedCollaborators,
          },
        },
      ],
    };
  } else if (selectedCategories.length > 0) {
    whereClause = {
      categories_some: {
        name_in: selectedCategories,
      },
    };
  } else if (selectedCollaborators.length > 0) {
    whereClause = {
      collaborators_some: {
        name_in: selectedCollaborators,
      },
    };
  }
  return whereClause;
};

export const useProjects = (args: UseProjectParams) => {
  const [projects, setProjects] = React.useState<ProjectFragment[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = React.useState<boolean>(false);

  const where = generateFilterQuery(args);
  console.log(where)
  const { first, skip } = args;
  const { data, error } = useSWR({
    query: FILTER_PROJECTS_QUERY,
    variables: {
      locale: "en",
      where,
      first,
      skip,
    },
  });

  // effects
  React.useEffect(() => {
    setLoading(!data && !error);
  }, [data, error]);

  React.useEffect(() => {
    if (!loading && data) {
      const projectsArray = (
        data as FilterProjectByCategoryOrCollaboratorQuery
      ).projectsConnection.edges.map((edge) => edge.node);
      const { hasNextPage } = (
        data as FilterProjectByCategoryOrCollaboratorQuery
      ).projectsConnection.pageInfo;
      // set states
      setHasNextPage(hasNextPage);
      setProjects([...projectsArray]);
    }
  }, [loading, data]);

  return {
    projects,
    loading,
    hasNextPage,
  };
};