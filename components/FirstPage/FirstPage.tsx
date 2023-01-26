import { Card, Overlay, Text } from '@mantine/core';
import useStyles from './FirstPage.styles';
import ImageCarousel from '../Carousel';

export const FirstPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Card style={{ backgroundImage: 'url(Mountain-1.png)' }} className={classes.card}>
        <Overlay opacity={0.08} zIndex={0} />

        <div className={classes.content}>
          <Text className={classes.numberText}>01</Text>
          <Text size="lg" weight={700} className={classes.title}>
            History
          </Text>

          <Text size="md" className={classes.description}>
            Aliquip sint enim laborum nostrud ullamco. Do dolor irure ipsum irure amet. Et officia
            est consectetur anim qui esse velit proident. Qui veniam velit esse id velit aute Lorem
          </Text>
        </div>

        <div className={classes.carousel}>
          <ImageCarousel />
        </div>
      </Card>
    </>
  );
};
