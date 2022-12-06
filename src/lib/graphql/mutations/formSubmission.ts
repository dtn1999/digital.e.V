import { gql } from "graphql-request";

export const CREATE_FORM_SUBMISSION = gql`
  mutation createSubmission($formData: Json!, $formId: ID!) {
    createSubmission(
      data: { formData: $formData, form: { connect: { id: $formId } } }
    ) {
      id
      form {
        formName
      }
    }
  }
`;
