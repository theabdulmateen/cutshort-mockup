export const formVariants = {
  hidden: {
    opacity: 0,
    x: 15,
    transition: {
      duration: 0.4,
      type: 'tween',
      stiffness: 600,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      stiffness: 600,
    },
  },
};
