import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title } from '@mantine/core';
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
    image: 'Snowy-Mountain1.png',
    id: 'mountain_1',
  },
  {
    image: 'Snowy-Mountain2.png',
    id: 'mountain_2',
  },
  {
    image: 'Snowy-Mountain3.png',
    id: 'mountain_3',
  },
  {
    image: 'Snowy-Mountain4.png',
    id: 'mountain_4',
  },
  {
    image: 'Guy-On-Cliff.png',
    id: 'mountain_5',
  },
  {
    image: 'Snowy-Mountain4.png',
    id: 'mountain_6',
  },
];

export const ImageCarousel = () => {
  const slides = data.map((item: any) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      loop
      align="start"
    >
      {slides}
    </Carousel>
  );
};
