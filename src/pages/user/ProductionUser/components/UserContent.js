import { Grid, Typography, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../../redux/actions/CategoryAction";
import { getProducts } from "../../../../redux/actions/ProductAction";

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

export function UserContent({items}) {



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])


    const param = useParams();
    const categoriesId = +param.id
    const data = useSelector((state) => state.product.products);
    // const categories = useSelector((state) => state.category.items);
    const item = data.filter((item) => { return item.id === categoriesId })
    // const category = categories.filter((item) => { return item.id === categoriesId })


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
                <Typography variant="h3" mb={2} >{item.name}</Typography>
                <Typography variant="h6" mb={2} >گروه : {item.categoryId}</Typography>
                <Typography variant="h5" mb={2} >قیمت : {item.price}</Typography>
                <Typography sx={{ width: '400px', mb: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt, ipsa praesentium laboriosam fugiat iste corporis dolores dicta rerum iusto.
                </Typography>
                <Grid container alignItems='center'>
                    <Grid><Button variant="contained"  >افزودن  به سبد خرید
                    </Button></Grid>
                    <Grid mr={2}><TextField type="number" label="تعداد" size="small" sx={{ width: '60px' }} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    )
} 
