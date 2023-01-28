import { Card, Image } from '@mantine/core';
import useStyles from './FirstPage.styles';
import ImageCarousel from '../Carousel';

export const FirstPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.content}>
          <Image width={120} height="auto" src="01-Image.png" />
        </div>
        <div className={classes.history}>
          <Image src="HSTRY.png" width={120} height="auto" />
        </div>
        <Image className={classes.lorem} src="Lorem-Page-Text.png" width={850} height="auto" />
      </Card>
      <div className={classes.carousel}>
        <ImageCarousel />
      </div>
    </>
  );
};
