import React from "react";
import { gql } from "graphql-request";
import useSWR from "swr";

const EventsQuery = gql`
  query EventsQuery($search_term: String) {
    EventItems(search_term: $search_term) {
      items {
        id
        name
        content {
          _uid
          featuredImage {
            filename
            name
            alt
            title
            copyright
            focus
          }
          name
          start: startDate
          end: endDate
          teaser
          color
          component
          _editable
        }
        slug: full_slug
      }
      total
    }
  }
`;

export const useEvents = (searchTerm?: string) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<any[]>([]);

  const { data, error } = useSWR({
    query: EventsQuery,
    variables: { search_term: searchTerm },
  });

  React.useEffect(() => {
    if (!data && !error) {
      setLoading(false);
    }
  }, [data, error]);

  React.useEffect(() => {
    if (data) {
      setEvents(data.EventItems.items);
    }
  }, [data, loading]);
  return {
    loading,
    error,
    events,
    initialDate: new Date(),
  };
};
