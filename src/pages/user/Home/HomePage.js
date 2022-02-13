import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import { getSlides } from '../../../redux/actions/SlideAction';
import store from '../../../redux/store';
import { Slider } from './components/Slider/SliderComponent';
class HomePage extends Component {

    componentDidMount() {
        // console.log('storeHomePage :', store.getState());

        // try {
            this.props.getSlides()
        // } catch (e) {
        //     toast.error('Error on get slides')
        // }

        // this.props.getSlides().then(res => console.log('store 2:',res))
    }

    render() {
        // console.log('props', this.props)
        console.log('DATA',this.props.slides)

        return <>
            <Helmet>
                title | Home
            </Helmet>
            <div>
                HomePage
                <Slider />
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
        getSlides: () => dispatch(getSlides())
    }
}
const Home = connect(null, mapDispatchToProps)(HomePage)

export { Home }

