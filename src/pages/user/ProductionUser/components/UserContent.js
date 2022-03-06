import { Grid, Typography, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PATHS } from "../../../../configs/RoutesConfig";
import { getCategories } from "../../../../redux/actions/CategoryAction";
import { createOrderAction } from "../../../../redux/actions/OrderAction";
import { getOrders } from "../../../../redux/actions/OrderAction";
import { addToCartAction } from "../../../../redux/actions/ShoppingCart";

const cardStyles = {
    width: '800px',
    maxHeigh: '500px',
    margin: '0 auto',
    padding: '16px 0',
    display: 'flex',
    justifyContent: 'center',
    mt: 5,
    boxShadow: 3,
    borderRadius: 4,

}


export function UserContent({ items }) {

    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch(addToCartAction({ id: items.id, count }))
    }

    const handleCountChange = (e) => {
        const value = +e.target.value;
        setCount(value >= 1 ? value : 1)
    }
    const useStyles = makeStyles((theme) => ({

        root: {
            backgroundImage: `url(http://localhost:3003/files/${items.image})`,
            width: 350,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            color: 'white',
        },
    }));
    const classes = useStyles();
    return (
        <Grid container sx={{ ...cardStyles }}>
            <Grid className={classes.root}>
            </Grid>
            <Grid item sx={{ margin: 'auto auto', width: 400 }}>
                <Typography variant="h4" mb={2} >{items.name}</Typography>
                <Typography variant="h6" mb={2} >گروه : {items.categoryId}</Typography>
                <Typography variant="h6" mb={2} >قیمت : {items.price}</Typography>
                <Typography sx={{ width: '400px', mb: 2 }}>
                    {items.description}
                </Typography>
                <Grid container alignItems='center'>
                    <Grid><Button variant="contained" onClick={handleClick} >افزودن  به سبد خرید
                    </Button></Grid>
                    <Grid ml={2}><TextField type="number" label="تعداد" size="small" sx={{ width: '60px' }} value={count} onChange={handleCountChange} /></Grid>
                </Grid>
            </Grid>
        </Grid>

    )
} 
