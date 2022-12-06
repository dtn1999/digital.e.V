import { gql } from "graphql-request";


export const AccordionFragment = gql`
fragment Accordion on Accordion {
  id
  typename:__typename
  items {
    summary
    description {
      raw
    }
  }
}
`;

export const TabFragment = gql`
fragment Tab on Tab {
  id
  typename:__typename
  tabs {
    title
    description {
      raw
    }
  }
}
`;

export const CountUpFragment = gql`
fragment CountUp on CountUp {
  to:value
}
`;

export const ParagraphFragment = gql`
fragment Paragraph on Paragraph {
  value {
    raw
  }
}
`;

export const MultiColumnFragment = gql`
fragment MultiColumn on MultiColumn {
  numberOfColumnsOnMobile
  numberOfColumnsOnDesktop
  columns {
    title
    titleOnBottom
    blocks {
      ...on CountUp {
        typename:__typename
        ...CountUp
      }
      ...on Paragraph {
        typename:__typename
        ...Paragraph
      }
    }
  }
}
`;