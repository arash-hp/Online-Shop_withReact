import Helmet from "react-helmet";
import { DataTable } from "./DataTable/DataTableComponent";

export const OrdersPage = () => {
    return <>
        <Helmet>
            <title>
                Page | Order
            </title>
        </Helmet>
        <div>OrderPage</div>
        <DataTable />
    </>
}