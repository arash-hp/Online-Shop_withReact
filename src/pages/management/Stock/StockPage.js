import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { Button, Grid } from "@mui/material";
import { DataTable } from "./components/DataTable/DataTableComponent";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/ProductAction";
import { getCategories } from "../../../redux/actions/CategoryAction";


export const StockPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    return <>
        <Helmet>
            <title>
                Page | Stock
            </title>
        </Helmet>
        <Grid container>
            {/* <Grid container item justifyContent={'center'} mt={4}>
                <Button variant="contained">ذخیره</Button>
            </Grid> */}
            <Grid container item>
                <DataTable />
            </Grid>
        </Grid>
    </>
}