import { gql } from "graphql-request";

export const CarouselFragment = gql`
fragment CarouselSlide on CarouselSlide {
  id
  image(locales: en) {
    url
    alt: fileName
  }
  headline
  title {
    text: value {
      id
      value
    }
  }
  description {
    content: value
  }
  cta {
    label
    variant
  }
}

fragment Carousel on Carousel {
  id
  slides {
    ...CarouselSlide
  }
}
`
export const BannerFragment = gql`
fragment Banner on Banner {
  id
  image(locales: en) {
    url
    alt: fileName
  }
  title {
    text: value {
      id
      value
    }
  }
  description {
    content: value
  }
  cta {
    label
    variant
   
  }
}
`