import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  footer: {
    backgroundColor: '#50627e',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'left',
  },

  imageColor: {
    backgroundColor: '#7488a7',
  },

  textContainer: {
    marginLeft: '.5rem',
  },

  title: {
    color: '#7488a7',
    fontSize: 17,
    fontWeight: 600,
    marginTop: '.25rem',
  },

  titleText: {
    color: '#7488a7',
    fontSize: 19,
    fontWeight: 500,
    marginTop: '-.5rem',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    color: '#7488a7',
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));
