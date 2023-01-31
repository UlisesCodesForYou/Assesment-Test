import { Card, Image, Grid } from '@mantine/core';
import useStyles from './ThirdSection.styles';

export const ThirdSection = () => {
  const { classes } = useStyles();

  return (
    <Card style={{ backgroundImage: 'url(Snowy-Mountain2.png)' }} className={classes.card}>
      <Grid justify="space-between" align="flex-start">
        <Grid.Col span={3} style={{ minHeight: 90 }}>
          <Image src="Mountain-Dates-2.png" width="auto" height={100} alt="mountain schedule" />
        </Grid.Col>
      </Grid>
    </Card>
  );
};
