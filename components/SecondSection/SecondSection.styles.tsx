import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  numberImage: {
    position: 'relative',
    maxWidth: '100%',
    padding: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
  },

  climb: {
    position: 'relative',
    padding: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      left: 100,
    },
  },

  ipsum: {
    position: 'relative',
    maxWidth: '100%',
    padding: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
  },
}));
