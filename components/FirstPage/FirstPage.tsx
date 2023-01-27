import { Card, Overlay, Image } from '@mantine/core';
import useStyles from './FirstPage.styles';
import ImageCarousel from '../Carousel';

export const FirstPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Card style={{ backgroundImage: 'url(First-Page-Image.png)' }} className={classes.card}>
        <Overlay opacity={0.08} zIndex={0} />

        <div className={classes.content}>
          <Image className={classes.numberText} width={170} height="auto" src="01-Image.png" />
          <Image className={classes.title} src="HSTRY.png" width={150} height="auto" />
        </div>
      </Card>
      <div className={classes.carousel}>
        <ImageCarousel />
      </div>
    </>
  );
};
