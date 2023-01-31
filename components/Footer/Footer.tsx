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

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
