import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  rectangle: {
    position: 'absolute',
    maxWidth: '100%',
    padding: theme.spacing.xl,
    left: 200,
    top: 45,
    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
  },

  schedule: {
    position: 'absolute',
    padding: theme.spacing.xl,
    left: 240,
    top: 65,
    [theme.fn.smallerThan('md')]: {
      left: 100,
    },
  },

  dates: {
    position: 'absolute',
    maxWidth: '100%',
    padding: theme.spacing.xl,
    left: 240,
    top: 105,
    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
  },
}));
