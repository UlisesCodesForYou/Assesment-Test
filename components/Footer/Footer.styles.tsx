import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  footer: {
    backgroundColor: '#50627e',
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'left',
  },

  mountainContainer: {
    marginLeft: '.5rem',
  },

  losAngelesText: {
    marginTop: '.25rem',
    [theme.fn.smallerThan('md')]: {
      marginBottom: '1rem',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
}));
