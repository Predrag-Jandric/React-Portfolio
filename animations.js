// THIS FILE CONTAINS ANIMATIONS FOR ALL SECTIONS.
// MODIFY ANIMATIONS HERE AND NOWHERE ELSE.

// animations for HERO section
export const heroVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

// animations for SKILLS section
export const skillsVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (index) => {
    return {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 0.1 * index,
      },
    };
  },
};

// animations for PROJECTS section
export const projectsVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (index) => {
    return {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.1 * index,
      },
    };
  },
};

// ROADMAP variants
export const roadmapVariants = {
  initial: {
    opacity: 0,
    x: -70,
  },
  animate: (index) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 * index,
      },
    };
  },
};

// GENERAL animations
export const generalVariants = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};
