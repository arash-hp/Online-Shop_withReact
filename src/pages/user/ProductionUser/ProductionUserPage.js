import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import { UserContent } from "./components/UserContent";

export const ProductionUserPage = ({item}) => {

    const param = useParams();

    return <>
        <Helmet>
            <title>
                Page | ProductionUser
            </title>
        </Helmet>
        <div><UserContent item={item} /></div>
    </>
}