import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme } from '@mantine/core';
import useStyles from './Carousel.styles';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: 'Mountain-1.png',
    id: 'mountain_1',
  },
  {
    image: 'Mountain-2.png',
    id: 'mountain_2',
  },
  {
    image: 'Mountain-3.png',
    id: 'mountain_3',
  },
  {
    image: 'Mountain-4.png',
    id: 'mountain_4',
  },
  {
    image: 'Mountain-1.png',
    id: 'mountain_5',
  },
  {
    image: 'Mountain-3.png',
    id: 'mountain_6',
  },
];

export const ImageCarousel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item: any) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
};
