import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import { getProducts } from '../../../redux/actions/ProductAction';
import store from '../../../redux/store';
import { Slider } from './components/Slider/SliderComponent';
import {Content} from './components/Content/ContentComponent';

class HomePage extends Component {

    componentDidMount() {
        // console.log('storeHomePage :', store.getState());

        // try {
            this.props.getProduct()
        // } catch (e) {
        //     toast.error('Error on get slides')
        // }

        // this.props.getSlides().then(res => console.log('store 2:',res))
    }

    render() {

        return <>
            <Helmet>
                title | Home
            </Helmet>
            <div>
                <Content />
            </div>
        </>
    }

}
// const mapStateToProps = (state) => {
//     return {
//         // articles: state.article.articles,
//         slides: state.slide.slides
//     }
// };

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: () => dispatch(getProducts())
    }
}
const Home = connect(null, mapDispatchToProps)(HomePage)

export { Home }

