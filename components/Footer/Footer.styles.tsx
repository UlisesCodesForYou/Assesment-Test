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

  textContainer: {
    marginLeft: '.5rem',
  },

  title: {
    color: '#343A40',
    fontSize: 17,
    fontWeight: 600,
  },

  titleText: {
    color: '#004d78',
    fontSize: 19,
    fontWeight: 500,
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
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));
