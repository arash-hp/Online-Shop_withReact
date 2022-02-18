import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row } from "../Content/Row/RowComponent";
import { CardComponent } from "./Card/CardComponent";

export const Content = () => {
    const data = useSelector((state) => state.slide.slides);
    // const wantedCategory = "کوله"
    // const filteredData = data.filter(item => item.category.name === wantedCategory)
    
    
    // const category = 'کوله'
    // const result = data.filter((item)=> item.category.name === category)
    // console.log('result',result);

    // const didMount = () => {
    //     getCategory()
    //   };

    // useEffect(() => {
    //     didMount();
    //   }, []);

    const getCategory = (data) => {
        const categories = data.map((item) => item.category.name)
        const uniq = [...new Set(categories)]
        return uniq
    }
    const result = getCategory(data);
    // const categories = data.filter((item)=>item.category.name === result)

    // console.log('category',result)

    // const items = data.filter((item) => item.category.name === category);

    return <Grid container justify="center" direction='column' spacing={4} sx={{ maxWidth: '900px', margin: '0 auto' }}>{
        result.map((item) => <Row key={item} category={item} />)
    }
    </Grid>

    // return <div><Row /></div>
}