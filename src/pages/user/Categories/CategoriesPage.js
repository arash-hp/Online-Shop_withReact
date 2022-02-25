import { Grid, Typography } from "@mui/material";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { PATHS } from "../../../configs/RoutesConfig";
import { CardComponent } from "../Home/components/Content/Card/CardComponent";
import { Row } from "../Home/components/Content/Row/RowComponent";

export const CategoriesPage = () => {

    const param = useParams();
    const categoriesId = +param.id
    const data = useSelector((state) => state.product.products);
    const result = data.filter((item) => { return item.category.id === categoriesId })
    const title = result[0].category.name;


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
