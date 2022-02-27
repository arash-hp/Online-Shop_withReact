import { Button, Grid } from "@mui/material";
import Helmet from "react-helmet";
import { DataTable } from "./DataTable/DataTableComponent";

export const OrdersPage = () => {
    return <>
        <Helmet>
            <title>
                Page | Order
            </title>
        </Helmet>
        <Grid container>
            <Grid container item justifyContent={'center'} mt={4}>
                <Button variant="contained">ذخیره تغییرات</Button>
            </Grid>
            <Grid container item>
                <DataTable />
            </Grid>
        </Grid>
    </>
}