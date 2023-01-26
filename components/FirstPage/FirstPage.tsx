import { Card, Overlay, Text } from '@mantine/core';
import useStyles from './FirstPage.styles';

export const FirstPage = () => {
  const { classes, theme } = useStyles();

  return (
    <Card radius="md" style={{ backgroundImage: 'url(Mountain-2.png)' }} className={classes.card}>
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.55}
        zIndex={0}
      />

      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          Hello
        </Text>

        <Text size="sm" className={classes.description}>
          lorem ipsum
        </Text>
      </div>
    </Card>
  );
};
