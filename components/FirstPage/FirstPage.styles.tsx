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
    top: 60,
    bottom: 0,
    right: 0,
    left: 150,
  },

  numberText: {
    color: '#343A40',
    opacity: '.4',
    fontSize: 150,
    float: 'left',
    fontWeight: 'bolder',
  },

  title: {
    color: '#343A40',
    marginBottom: theme.spacing.xs / 2,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '8rem',
  },

  description: {
    color: 'black',
    maxWidth: 1000,
  },
}));
