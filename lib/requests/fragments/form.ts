import { gql } from "graphql-request";

export const FormFragment = gql`
fragment FormInput on FormInput {
    __typename
    id
    name
    label
    placeholder
    required
    type
}

fragment FormRadio on FormRadio {
    __typename
    id
    name
    label
    required
}

fragment FormCheckbox on FormCheckbox {
    __typename
    id
    name
    label
    required
}

fragment FormTextarea on FormTextarea {
    __typename
    id
    name
    label
    placeholder
    required
}

fragment FormSelect on FormSelect {
    __typename
    id
    name
    choices {
      id
      value
      option
    }
    required
}

fragment FormFields on FormRowfieldsUnion {
  ... on FormInput {
      typename: __typename
      ...FormInput
  }
  ... on FormRadio {
      typename: __typename
      ...FormRadio
  }
  ... on FormCheckbox {
      typename: __typename
      ...FormCheckbox
  }
  ... on FormTextarea {
      typename: __typename
      ...FormTextarea
  }
  ... on FormSelect {
      typename: __typename
      ...FormSelect
  }
}

fragment Form on Form {
   __typename
  id
  submitButtonLabel
  fields {
    typename: __typename
    ... on FormRow {
      fields {
        typename:__typename
        ...FormFields
      }
    }
    ...FormFields
  }
}
`