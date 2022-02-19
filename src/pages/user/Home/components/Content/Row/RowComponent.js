import { Card, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CardComponent } from "../Card/CardComponent";

const rowStyles = {
    width: '100%',
    mb: 1,
    borderColor: 'text.primary',
    display: 'flex',
    justifyContent: 'center',
};

export const Row = ({ category }) => {
    const data = useSelector((state) => state.slide.slides);
    const items = data.filter((item) => item.category.name === category);

    return <Grid container sx={{ ...rowStyles}}>
        {items.map((item,index)=><CardComponent key={index} item={item}/>)}
    </Grid>
}
