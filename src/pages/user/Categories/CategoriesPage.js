import { Grid, Typography } from "@mui/material";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { PATHS } from "../../../configs/RoutesConfig";
import { CardComponent } from "../Home/components/Content/Card/CardComponent";
import { Row } from "../Home/components/Content/Row/RowComponent";

export const CategoriesPage = () => {

    // const getCategoriesFromProductList = (items) => {
    //     const categories = {};
    //     items.forEach((item) => { categories[item.category.id] = item.category });

    //     return Object.values(categories);
    // }
    const param = useParams();
    const categoriesId = +param.id
    const data = useSelector((state) => state.slide.slides);
    const result = data.filter((item) => { return item.category.id === categoriesId })
    const title = result[0].category.name;

    // const getCategory =  () => {
    //     const categories = data.map((item) => item.category?.name)
    //     console.log('category', categories)

    //     const uniq = [...new Set(categories)]
    //     return uniq   // return category without id
    // }

    // const result = getCategory();



    // const items = data.filter((item) => item.category.name === result);
    // console.log('category', result)

    console.log('result', result)
    return <>
        <Helmet>
            <title>
                Page | Categories
            </title>
        </Helmet>
        <Grid container justifyContent='center' mt={2}>
            <Typography>دسته بندی : {title}</Typography>
        </Grid>
        <Grid container justifyContent='center' mt={2}>

            {result.map((item) => <Link to={`${PATHS.PRODUCTIONS}/${item.id}`}>{<CardComponent key={item.id} item={item} />}</Link>)}
        </Grid>
    </>
}