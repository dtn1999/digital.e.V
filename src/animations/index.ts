
export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  
export const fadeInOut = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

/**
 * @param {string} name - The name of the animation.
 * this animation is used in the @{@link "../features/Section/index.tsx"}
 */  
export const  slideLeftRight = {
    imageHidden: (imagePosition: any) => ({
      opacity: 0,
      x: !imagePosition || imagePosition === "left" ? "-100%" : "100%",
    }),
    panelHidden: (imagePosition: any) => ({
      opacity: 0,
      x: !imagePosition || imagePosition === "left" ? "100%" : "-100%",
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        type: "tween",
      },
    },
  };

  export const overlayOpacity = {
    hidden: { opacity: 0 },
    show: (opacity:number) => {

    }
  }

  export const fadeInRight = {
    hidden: ({ opacity: 0, x: "100%"}),
    show:{ opacity: 1, x: 0 ,
    transition: {
      duration: 0.2,
      type: "tween",
    }},
  }