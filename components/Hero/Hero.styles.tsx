import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  hero: {
    backgroundImage: 'url(Mountain-1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 11,
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 13,
    },
  },

  subContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  title: {
    color: '#343A40',
    fontSize: 120,
    fontWeight: 600,
    lineHeight: 1.1,

    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  titleText: {
    color: '#50627e',
    fontSize: 137,
    fontWeight: 500,
    marginTop: '-5rem',

    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },
}));
