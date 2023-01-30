import { Image, Center } from '@mantine/core';
import useStyles from './SecondSection.styles';

export const SecondSection = () => {
  const { classes } = useStyles();

  return (
    <>
      <Center>
        <div className={classes.numberImage}>
          <Image width={120} height="auto" src="02-Image.png" />
        </div>
        <div className={classes.climb}>
          <Image src="Climb.png" width={120} height="auto" />
        </div>
        <Image className={classes.ipsum} src="Ipsum-Text.png" width={850} height="auto" />
      </Center>
    </>
  );
};

// <div className={classes.content}>
//   <Image width={120} height="auto" src="01-Image.png" />
// </div>
// <div className={classes.history}>
//   <Image src="HSTRY.png" width={120} height="auto" />
// </div>
// <Image className={classes.lorem} src="Lorem-Page-Text.png" width={850} height="auto" />
