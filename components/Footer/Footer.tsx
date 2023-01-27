import { Container, Group, ActionIcon, Image, Text, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import useStyles from './Footer.styles';

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.imageContainer}>
          <Image
            radius="xl"
            src="Mountain-Drawing.png"
            alt="Mountain Drawing"
            width={50}
            height={50}
          />
          <div className={classes.textContainer}>
            <Title className={classes.title} order={1}>
              LOSANGELES
              <Text className={classes.titleText}>MOUNTAINS</Text>
            </Title>
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
