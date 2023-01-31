import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  content: {
    position: 'relative',
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 80,
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
