import React from "react";
import { gql } from "graphql-request";
import useSWR from "swr";

const ProjectQuery = gql`
  query ProjectsQuery($search_term: String) {
    ProjectItems(search_term: $search_term) {
      items {
        id
        content {
          _uid
          _editable
          component
          name
          featuredImage {
            alt
            copyright
            filename
            id
            name
          }
          teaser
          status
        }
        full_slug
      }
    }
  }
`;

export const useProjects = (searchTerm?: string) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [projects, setProjects] = React.useState<any[]>([]);

  const { data, error } = useSWR({
    query: ProjectQuery,
    variables: { search_term: searchTerm },
  });

  React.useEffect(() => {
    if (!data && !error) {
      setLoading(false);
    }
  }, [data, error]);

  React.useEffect(() => {
    if (data) {
      setProjects(data.ProjectItems.items);
    }
  }, [data, loading]);
  return {
    loading,
    error,
    projects,
  };
};
