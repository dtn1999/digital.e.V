import { gql } from "graphql-request";
import { EventCalendarFragment, EventCardFragment, EventFragment } from "../fragments/models/event";


export const EventCardsQuery = gql`
query GetEventCards($locale:Locale!, $where: EventWhereInput, $first: Int, $skip: Int, $orderBy: EventOrderByInput){
    events(locales:[$locale], where: $where, first: $first, skip: $skip, orderBy: $orderBy){
        ...EventCalendar
    }
}
${EventCalendarFragment}
`;

export const EventInfoQuery = gql`
query GetEventInfo($locale:Locale!, $slug: String!){
    event(locales:[$locale], where:{slug:$slug}){
        ...Event
    }
}
${EventFragment}
`

export const NextEventsSlugQuery = gql`
  query GetNextEventsSlug($locale: Locale!, $where: EventWhereInput, $orderBy: EventOrderByInput) {
    resources:events(locales: [$locale], where: $where, orderBy: $orderBy, first: 1) {
      slug
    }
  }
`