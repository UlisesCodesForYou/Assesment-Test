import { Container, Title, Text } from '@mantine/core';
import useStyles from './Hero.styles';

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <Title className={classes.title} order={1}>
          LOS ANGELES
          <Text className={classes.titleText}>MOUNTAINS</Text>
        </Title>
      </Container>
    </div>
  );
};
