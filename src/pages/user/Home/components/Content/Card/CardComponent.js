import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { createOrderAction } from '../../../../../../redux/actions/OrderAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../../../../configs/RoutesConfig';



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

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createOrderAction(item))
  }

  return <Grid item m={1}>
    <Card sx={{ width: 195, height: 240, }} className={classes.hover} >
     <Link to={`${PATHS.PRODUCTIONS}/${item.id}`}> <Box sx={{ height: "140px", mt: 2, ml: 1, mr: 1 }} className={classes.root}></Box></Link>
      <CardContent
        sx={{ maxHeight: 20 }}
      >
        <Typography gutterBottom variant="caption" component="div">
          {item.name} {item.brand}
        </Typography>
      </CardContent>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <CardActions sx={{ width: 95 }}>
            {/* <Button size="small" onClick={handleClick}>افزودن به سبد خرید</Button> */}
            <IconButton onClick={handleClick}
           
            >
              <ShoppingCartIcon 
              color='primary'
              sx={{ fontSize: 14 }}/>
            </IconButton>
          </CardActions>

          <Typography variant="caption" pr={1}>{item.price} : تومان</Typography>
      </Grid>
    </Card>
  </Grid>
}