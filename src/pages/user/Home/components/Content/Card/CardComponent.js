import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, Typography } from '@mui/material';
import {  makeStyles } from '@mui/styles';
import * as React from 'react';


export const CardComponent = ({ item }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(http://localhost:3003/files/${item.image})`,
      height: 140,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: 'white',
    },
  }));

  const classes = useStyles();

  return <Grid item   m={1}>
    <Card sx={{ width: 195, height: 240 ,}}>
      <Box sx={{ height: "140px",mt:2,ml:1,mr:1 }} className={classes.root}></Box>
      <CardContent
        sx={{ maxHeight: 20 }}
      >
        <Typography gutterBottom variant="caption" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">افزودن به سبد خرید</Button>
      </CardActions>
    </Card>
  </Grid>
}