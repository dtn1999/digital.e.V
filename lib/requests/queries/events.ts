import { gql } from "graphql-request";
import { SEOFragment } from "../fragments/pages";

export const EventFragment = gql`
fragment EventCalendar on Event {
  id
  slug
  title
  start
  end
  color {
    hex
  }
  description{
    text
  }
}
`

export const EventFullPropertiesFragment = gql`
fragment EventFullProperties on Event {
  id
  createdAt
  slug
  title
  start
  end
  color {
    hex
  }
  image:featuredImage(locales: en){
    url
    fileName
  }
  shortDescription
  description{
    json
  }
}
`

export const EVENT_SLUGS_QUERY = gql`
  query GetEventsSlugs{
    events {
      slug
    }
  }
`
export const EVENT_SEARCH_QUERY = gql`
  query GetEventsSearch($locale: Locale!, $where: EventWhereInput, $orderBy: EventOrderByInput) {
    events(locales: [$locale], where: $where, orderBy: $orderBy){
      ...EventFullProperties
    }
  }
  ${EventFullPropertiesFragment}
`
export const EVENT_BY_CREATED_AT_QUERY = gql`
  query GetEventByCreatedAt($locale: Locale!, $where: EventWhereInput, $orderBy: EventOrderByInput) {
    resources:events(locales: [$locale], where: $where, orderBy: $orderBy, first: 1) {
      slug
    }
  }
`
export const SINGLE_EVENT_QUERY = gql`
  query GetEventByLocaleAndSlug($locale: Locale!, $slug: String!) {
    page(locales: [$locale], where: {slug: "events"}) {
      seo {
        ...Seo
      } 
    }
    event(where: { slug: $slug }) {
      ...EventFullProperties
    }
  }
  ${EventFullPropertiesFragment}
  ${SEOFragment}
`

export const EVENTS_QUERY = gql`
query GetEventsByLocale($locale: Locale!){
    page(locales: [$locale], where: {slug: "events"}) {
        seo {
            ...Seo
        }
    }
    events(locales: [$locale]) {
      ...EventCalendar
    }
    
}
${SEOFragment}
${EventFragment}
`