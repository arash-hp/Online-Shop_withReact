import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, Typography } from '@mui/material';
import * as React from 'react';

export const CardComponent = ({ item }) => {
  return <Grid item >
    <Card sx={{ width: 195, height: 240, m: 1 }}>
      <CardMedia
        component="img"
        sx={{
          Height: 'auto', width: '100%'
        }}
        height="140"
        // max-width='120'
        // flex={1}
        // objectFit='cover'
        image={`http://localhost:3003/files/${item.image}`}
        alt="green iguana"
      />
      <CardContent
        sx={{ maxHeight: 20 }}
      >
        <Typography gutterBottom variant="p" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">افزودن به سبد خرید</Button>
      </CardActions>
    </Card>
  </Grid>
}