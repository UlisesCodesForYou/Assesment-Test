import { useState } from 'react';
import { Burger, Container, Drawer, Group, Header, Image, Paper } from '@mantine/core';
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
  const [opened, setOpened] = useState<boolean>(false);
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
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <div className={classes.imageContainer}>
          <Image radius="xl" src="Navbar-Image.png" alt="Mountain Drawing" width={50} height={50} />
          <div className={classes.textContainer}>
            <Image src="Los-Angeles-Mountains-Navbar-Img.png" alt="Los Angeles Mountains" />
          </div>
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => setOpened(true)}
          className={classes.burger}
          size="sm"
        />

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Menu"
          padding="md"
          size="md"
          position="right"
        >
          <Paper className={classes.drawer}>{items}</Paper>
        </Drawer>
      </Container>
    </Header>
  );
};
