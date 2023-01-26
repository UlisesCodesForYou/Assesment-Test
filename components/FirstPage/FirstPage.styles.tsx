import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    marginTop: '1rem',
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
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));
