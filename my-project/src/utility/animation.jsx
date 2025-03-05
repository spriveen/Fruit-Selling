export const FadeUp = (delay) => ({
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  });
  
  export const FadeLeft = (delay) => ({
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  });
  
  export const FadeRight = (delay) => ({
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  });
  