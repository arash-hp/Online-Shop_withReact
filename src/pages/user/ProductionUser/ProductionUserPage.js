import { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserContent } from "./components/UserContent";
import { getCategories } from '../../../redux/actions/CategoryAction';
import { getProducts } from "../../../redux/actions/ProductAction";


export const ProductionUserPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    const param = useParams();
    const categoriesId = +param.id
    const data = useSelector((state) => state.product.products);
    const item = data.filter((item) => { return item.id === categoriesId })
  





    return <>
        <Helmet>
            <title>
                Page | ProductionUser
            </title>
        </Helmet>
        <div><UserContent items={item[0]} /></div>
    </>
}