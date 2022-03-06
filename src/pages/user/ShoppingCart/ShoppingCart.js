import { Grid, Typography } from "@mui/material"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useDispatch } from "react-redux"
import { getCategories } from "../../../redux/actions/CategoryAction"
import { getOrders } from "../../../redux/actions/OrderAction"
import { getProducts } from "../../../redux/actions/ProductAction"
import { DataTable } from "./components/DataTable/DataTableComponent"

export const ShoppingCartPage = () => {


    return <>
        <Helmet>
            <title>

            </title>
        </Helmet>
        <Grid container>
            <Grid container>
                <Typography>سبد خرید</Typography>
            </Grid>
            <DataTable />
        </Grid>
    </>
}