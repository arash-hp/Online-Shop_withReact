import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserContent } from "./components/UserContent";

export const ProductionUserPage = () => {


    const param = useParams();
    const categoriesId = +param.id
    const data = useSelector((state) => state.slide.slides);
    const item = data.filter((item) => { return item.id === categoriesId })
   



    return <>
        <Helmet>
            <title>
                Page | ProductionUser
            </title>
        </Helmet>
        <div><UserContent item={item[0]} /></div>
    </>
}