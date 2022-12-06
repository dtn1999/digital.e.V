import { gql } from "graphql-request";
import { MemberFragment } from "../models/member";

export const TeamSectionFragment = gql`
fragment TeamSection on TeamSection {
  id
  headline
  backgroundColor
  members {
    ...Member
  }
  cta {
    ...Button
  }
}
${MemberFragment}
`;