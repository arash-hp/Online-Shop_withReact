import Helmet from "react-helmet";
import { DataTable } from "./components/DataTable/DataTableComponent";

export const StockPage = () => {
    return <>
        <Helmet>
            <title>
                Page | Stock
            </title>
        </Helmet>
        <div>StockPage</div>
        <DataTable />
    </>
}