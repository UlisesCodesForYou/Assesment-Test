import { Container, Image } from '@mantine/core';
import useStyles from './Hero.styles';

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <Image
          src="Los-Angeles-hero-Text.png"
          alt="Los Angeles text"
          className={classes.imageContainer}
        />
      </Container>
    </div>
  );
};
