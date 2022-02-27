import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { PATHS } from "../../../configs/RoutesConfig";
import { getCategories } from "../../../redux/actions/CategoryAction";
import { getProducts } from "../../../redux/actions/ProductAction";
import { CardComponent } from "../Home/components/Content/Card/CardComponent";
import { Row } from "../Home/components/Content/Row/RowComponent";

export const CategoriesPage = () => {

  
    const product = useSelector((state) => state.product.products);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const param = useParams();
    const categoriesId = +param.id

    const result = product.filter((item) => { return item.categoryId === categoriesId })
    // const title = result[0].category.name;

    return <>
        <Helmet>
            <title>
                Page | Categories
            </title>
        </Helmet>
        <Grid container justifyContent='center' mt={2}>
            <Typography>دسته بندی : </Typography>
        </Grid>
        <Grid container justifyContent='center' mt={2}>
            {result.map((item) => <Link to={`${PATHS.PRODUCTIONS}/${item.id}`}>{<CardComponent key={item.id} item={item} />}</Link>)}
        </Grid>
    </>
}
