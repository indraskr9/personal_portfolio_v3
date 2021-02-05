import {Variants} from 'framer-motion'

export const ProjectContainerVariants: Variants = {
  start: {
    opacity: 0,
    transition: {staggerChildren: 0.2},
  },
  end: {
    opacity: 1,
    transition: {staggerChildren: 0.3},
  },

  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
    },
  },
}

export const ProjectItemVariants: Variants = {
  start: {
    opacity: 0.1,
    y: '100%',
    scale: 0.8,
    transition: {},
  },
  end: {
    opacity: 1,
    y: '0%',
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
}

export const ProjectCardAnimation: Variants = {
  start: {
    opacity: 0,
    transition: {},
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
}
