import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    marginTop: '3rem',
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(First-Page-Image.png)',
  },

  carousel: {
    marginTop: '-15rem',
    width: '50%',
    display: 'block',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  content: {
    position: 'absolute',
    maxWidth: '100%',
    padding: theme.spacing.xl,
    left: 200,
    top: 45,
    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
  },

  history: {
    position: 'absolute',
    padding: theme.spacing.xl,
    left: 300,
    top: 85,
    [theme.fn.smallerThan('md')]: {
      left: 100,
    },
  },

  lorem: {
    position: 'absolute',
    maxWidth: '100%',
    padding: theme.spacing.xl,
    left: 250,
    top: 150,
    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
  },
}));
