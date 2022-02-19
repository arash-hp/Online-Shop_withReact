import Helmet from "react-helmet";
import { UserContent } from "./components/UserContent";

export const ProductionUserPage = () => {
    return <>
        <Helmet>
            <title>
                Page | ProductionUser
            </title>
        </Helmet>
        <div><UserContent /></div>
    </>
}