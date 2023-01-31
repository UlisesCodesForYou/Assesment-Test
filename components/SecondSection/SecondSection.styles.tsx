import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  centerContainer: {
    textAlign: 'center',
  },

  numberImage: {
    position: 'relative',
    maxWidth: '100%',
    padding: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      left: 190,
    },
  },

  climb: {
    position: 'relative',
    padding: theme.spacing.xl,
    left: -80,
    top: 20,

    [theme.fn.smallerThan('md')]: {
      left: 100,
    },
  },

  ipsum: {
    position: 'relative',
    maxWidth: '100%',
    left: -90,
    top: 20,

    [theme.fn.smallerThan('md')]: {
      left: -190,
      top: 120,
    },
  },
}));
