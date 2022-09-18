import { gql } from "graphql-request";

export const GET_SITE_LAYOUT = gql`
query GetLayout($locale: Locale!) {
  layouts(locales: [$locale]) {
    navBar {
      ...NavigationFragment
    }
    footer {
      ...FooterFragment
    }
  }
  
  socialHandles {
    id
    label
    icon
  }
}

fragment NavigationFragment on Navigation {
  logo {
    url
    alt
  }
  links: pages {
    label:navigationLabel
    href:slug
  }
  ctas:callToActions {
    ...Button
  }
}

fragment Button on Button {
  id
  label
  variant
}

fragment FooterFragment on Footer {
  columns {
    id
    title {
      id
      value {
        id
      }
    }
    children {
      typename:__typename
    }
  }
}
`