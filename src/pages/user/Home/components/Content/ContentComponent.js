import { Box, Grid, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../../configs/RoutesConfig";
import { Row } from "../Content/Row/RowComponent";
import { CardComponent } from "./Card/CardComponent";

const rowStyles = {
    bgcolor: 'red',
    m: 1,
    borderColor: 'text.primary',
    boxShadow: 3,
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    borderRadius: 4,
};

const getCategoriesFromProductList = (items)=>{
    const categories = {};
    items.forEach((item)=>{categories[item.category.id]=item.category});

    return Object.values(categories); 
}


export const Content = () => {
    const data = useSelector((state) => state.product.products);

    // const getCategory = (data) => {
    //     const categories = data.map((item) => item.category?.name)
    //     const uniq = [...new Set(categories)]
    //     return uniq   // return category without id
    // }

    const result = getCategoriesFromProductList(data);
    console.log('result',result.id)

    

    return <Grid container justify="center" direction='column' spacing={4} sx={{ maxWidth: '880px', margin: '0 auto' }}>{
        result.map((item,index) => <>
            <Grid sx={{ ...rowStyles }}>
                <Typography variant="h4" pr={5} pt={2} pb={2} >
                   <Link to={`${PATHS.CATEGORIES}/${item.id}`} key={item.id}>{item.name}</Link>
                </Typography>
                <Row category={item} key={item.id}/>
            </Grid>
        </>)
    }
    </Grid >

}