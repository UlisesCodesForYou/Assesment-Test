import { Card, Text } from '@mantine/core';
import useStyles from './ThirdSection.styles';

export const ThirdSection = () => {
  const { classes } = useStyles();

  return (
    <Card
      radius="md"
      style={{ backgroundImage: 'url(Snowy-Mountain2.png)' }}
      className={classes.card}
    >
      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          one more time!
        </Text>

        <Text size="sm" className={classes.description}>
          hello
        </Text>
      </div>
    </Card>
  );
};
