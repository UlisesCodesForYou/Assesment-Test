import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    height: 240,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  carouselContainer: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#50627e',
    opacity: 0.9,
  },
}));
