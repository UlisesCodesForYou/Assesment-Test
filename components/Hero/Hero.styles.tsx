import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  hero: {
    backgroundImage: 'url(Hero.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '40%',
    paddingBottom: theme.spacing.xl * 10,
    zIndex: 1,

    [theme.fn.smallerThan('md')]: {
      paddingBottom: theme.spacing.xl * 13,
      width: '300px',
      marinLeft: '12rem',
    },
  },

  imageContainer: {
    marginLeft: '-5rem',
    marginBottom: '3.5rem',
  },
}));
