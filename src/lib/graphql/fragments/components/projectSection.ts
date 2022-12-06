import { gql } from "graphql-request";
import {ProjectCardFragment} from "../models/projects";

export const ProjectSectionFragment = gql`
fragment ProjectSection on ProjectSection {
    id
    headline
    typename:__typename
    projects {
      ...ProjectCard
    }
    cta {
      ...Button
    }
}
`;