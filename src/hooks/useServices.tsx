import React from "react";
import { gql } from "graphql-request";
import useSWR from "swr";

const ServicesQuery = gql`
  query ServicesQuery($search_term: String) {
    ServiceItems(search_term: $search_term) {
      items {
        id
        content {
          icon
          image {
            id
            filename
            alt
            name
            title
          }
          description
          _uid
          _editable
          teaser
          name
        }
        full_slug
      }
    }
  }
`;
export const useServices = (searchTerm?: string) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [services, setServices] = React.useState<any[]>([]);

  const { data, error } = useSWR({
    query: ServicesQuery,
    variables: { search_term: searchTerm },
  });

  React.useEffect(() => {
    if (!data && !error) {
      setLoading(false);
    }
  }, [data, error]);

  React.useEffect(() => {
    if (data) {
      setServices(data.ServiceItems.items);
    }
  }, [data, loading]);
  return {
    loading,
    error,
    services,
  };
};
