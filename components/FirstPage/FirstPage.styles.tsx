import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    marginTop: '3rem',
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  carousel: {
    marginTop: '-15rem',
    width: '50%',
    display: 'block',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.xl,
    top: 0,
    bottom: 0,
    right: 0,
    left: 150,
    [theme.fn.smallerThan('md')]: {
      left: 0,
    },
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

  squareFiller: {
    backgroundColor: '#343A40',
    opacity: '.4',
  },

  description: {
    color: 'black',
    maxWidth: 1000,
  },
}));
