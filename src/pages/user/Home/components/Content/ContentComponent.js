import { Box, Grid, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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


export const Content = () => {
    const data = useSelector((state) => state.slide.slides);

    const getCategory = (data) => {
        const categories = data.map((item) => item.category.name)
        const uniq = [...new Set(categories)]
        return uniq
    }
    const result = getCategory(data);

    return <Grid container justify="center" direction='column' spacing={4} sx={{ maxWidth: '880px', margin: '0 auto' }}>{
        result.map((item, index) => <><Grid sx={{ ...rowStyles}}><Typography variant="h4" pr={5} pt={2} pb={2} >{item}</Typography><Row key={index} category={item} /></Grid></>)
    }
    </Grid >

}