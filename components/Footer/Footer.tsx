import { Container, Group, ActionIcon, Image, Text, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import useStyles from './Footer.styles';

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.imageContainer}>
          <Image radius="xl" src="Footer-Logo.png" alt="Mountain Drawing" width={50} height={50} />
          <div className={classes.textContainer}>
            <Image
              src="LA-Mountain-Footer-Logo.png"
              alt="Los Angeles mountain text"
              width="auto"
              height={50}
              className={classes.title}
            />
          </div>
        </div>
        <Image src="Copyright-Image.png" alt="Copyright text" width="auto" />
      </Container>
    </div>
  );
};
