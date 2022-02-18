import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';

export const CardComponent = ({ item }) => {
  console.log('cards',item)
  return <Grid item >
    <Card sx={{ maxWidth: 185 }}>
      <CardMedia
        component="img"
        height="140"
        image="http://localhost:3003/files/234bfb4188cc0675fa26864c9b27e786"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.category.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
}