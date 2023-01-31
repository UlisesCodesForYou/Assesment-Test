import { Image, Center } from '@mantine/core';
import useStyles from './SecondSection.styles';

export const SecondSection = () => {
  const { classes } = useStyles();

  return (
    <>
      <Center style={{ width: '100%', height: 300 }}>
        <div className={classes.numberImage}>
          <Image width={190} height="auto" src="02-Image.png" />
        </div>
        <div className={classes.climb}>
          <Image src="Climb.png" width={90} height="auto" />
        </div>
        <Image className={classes.ipsum} src="Ipsum-Text.png" width={650} height="auto" />
      </Center>
    </>
  );
};
