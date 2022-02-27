import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../../configs/RoutesConfig";
import { getCategories } from "../../../../../redux/actions/CategoryAction";
import { getProducts } from "../../../../../redux/actions/ProductAction";
import { Row } from "../Content/Row/RowComponent";




export const Content = () => {
    const categories = useSelector((state) => state.category.items);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])


    return <Grid container justify="center" direction='column' spacing={4} sx={{ maxWidth: '880px', margin: '0 auto' }}>{
        Object.values(categories).map((item) => 
        <Row category={item} key={item.id} />
        )
    }
    </Grid >

}