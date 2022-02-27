import { Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../../../configs/RoutesConfig";
import { CardComponent } from "../Card/CardComponent";

const rowStyles = {
    width: '100%',
    mb: 1,
    borderColor: 'text.primary',
    display: 'flex',
    justifyContent: 'center',

};

const rootStyles = {
    m: 1,
    borderColor: 'text.primary',
    boxShadow: 3,
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
    borderRadius: 4,
};


export const Row = ({ category }) => {
    const data = useSelector((state) => state.product.products);
    const items = data.filter((item) => item.categoryId === category.id);
    console.log('categories',category)

    if (!items.length) {
        return null
    }

    return <Grid sx={rootStyles} >
        <Typography variant="h4" pr={5} pt={2} pb={2} >
            <Link to={`${PATHS.CATEGORIES}/${category.id}`} >{category.name}</Link>
        </Typography>
        <Grid container sx={rowStyles}>
            {items.map((item, index) => <CardComponent key={index} item={item} />)}
        </Grid>
    </Grid>

}
