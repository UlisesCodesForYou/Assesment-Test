import { Container, Title, Text } from '@mantine/core';
import useStyles from './Hero.styles';

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <div className={classes.subContainer}>
          <Title className={classes.title} order={1}>
            LOS ANGELES
            <Text className={classes.titleText}>MOUNTAINS</Text>
          </Title>
        </div>
      </Container>
    </div>
  );
};
