import { useEffect } from "react";
import Helmet from "react-helmet";
import {  useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/ProductAction";
import store from "../../../redux/store";
import {Information } from './components/index'
export const DashboardPage = () => {

    

    const dispatch = useDispatch()

    useEffect(()=>{dispatch(getProducts())},[dispatch])

    return <>
        <Helmet>
            <title>
                Page | Dashboard
            </title>
        </Helmet>
        <Information />
    </>
}

// class Dashboard extends Component {
//     componentDidMount() {

//         console.log('store :', store.getState());
//     }

//     render() {

//         return <>
//             <Helmet>
//                 <title>
//                     Page | Dashboard
//                 </title>
//             </Helmet>
//             <div>DashboardPage</div>
//             <Information data={this.props.slides} />
//         </>
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         slides: state.slide.slides
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getSlides: () => dispatch(getSlides())
//     }
// }
// export const DashboardPage = connect(mapStateToProps, mapDispatchToProps)(Dashboard)


