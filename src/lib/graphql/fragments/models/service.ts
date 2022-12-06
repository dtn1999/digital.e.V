import { gql } from "graphql-request";


export const ServiceFragment = gql`
fragment Service on Service {
  id
  typename:__typename
  name
  description
  icon
  image(locales: en){
    ...Asset   
  }
}
`