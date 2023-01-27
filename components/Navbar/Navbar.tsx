import { useState } from 'react';
import {
  Burger,
  Container,
  Group,
  Header,
  Image,
  Paper,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useStyles from './Navbar.styles';

const HEADER_HEIGHT = 60;
const links = [
  {
    label: '01. History',
    link: 'history',
  },
  {
    label: '02. Team',
    link: 'team',
  },
];

export const NavigationBar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link: any) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
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
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
