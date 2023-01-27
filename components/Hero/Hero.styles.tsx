import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  hero: {
    backgroundImage: 'url(Hero.png)',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '50%',
    paddingBottom: theme.spacing.xl * 10,
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 13,
    },
  },

  imageContainer: {
    marginLeft: '-4rem',
    marginBottom: '3.5rem',
  },
}));
