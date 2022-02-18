import { Grid, List } from "@mui/material";
import { useSelector } from "react-redux";
import { CardComponent } from "../Card/CardComponent";

export const Row = ({ category }) => {
    const data = useSelector((state) => state.slide.slides);
    const items = data.filter((item) => item.category.name === category);
    console.log('items',items)

    return <Grid spacing={2} container >
        {items.map((item)=><CardComponent  item={item}/>)}
    </Grid>
}