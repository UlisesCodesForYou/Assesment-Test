import { Card, Image } from '@mantine/core';
import useStyles from './ThirdSection.styles';

export const ThirdSection = () => {
  const { classes } = useStyles();

  return (
    <>
      <Image src="Rectangle 20.png" width="auto" height="auto" />
      <Image src="Mountain 1.png" width="auto" height="auto" />
      <Card style={{ backgroundImage: 'url(Snowy-Mountain2.png)' }} className={classes.card}>
        <div className={classes.rectangle}>
          <Image width="auto" height="auto" src="Rectangle-Image.png" />
        </div>
        <div className={classes.schedule}>
          <Image src="Schedule-Image.png" width={120} height="auto" />
        </div>
        <Image className={classes.dates} src="Mountain-Dates-2.png" width="auto" height="auto" />
      </Card>
    </>
  );
};
