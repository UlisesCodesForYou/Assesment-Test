import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    marginTop: '3rem',
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  carousel: {
    marginTop: '32rem',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.xl,
    zIndex: 1,
    top: '10rem',
    bottom: 0,
    right: 0,
    left: '10rem',
  },

  title: {
    color: '#343A40',
    marginBottom: theme.spacing.xs / 2,
    fontSize: 50,
  },

  description: {
    color: 'black',
    maxWidth: 330,
    display: 'inline',
  },
}));
