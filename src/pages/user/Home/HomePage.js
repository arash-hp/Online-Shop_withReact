import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import {toast} from 'react-toastify';
import {getSlides} from '../../../redux/actions/SlideAction';
import store from '../../../redux/store';

class HomePage extends Component {

    componentDidMount(){
        console.log('store :',store.getState().articles,this.props);

        try{
            this.props.getSlides()
        }catch(e){
            toast.error('Error on get slides')
        }

        this.props.getSlides()
    }

    render() {
        return <>
            <Helmet>
                title | Home
            </Helmet>
            <div>HomePage</div>
        </>
    }

}
const mapStateToProps = (state)=>{
    return {
        articles: state.articles,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        getSlides:()=> dispatch(getSlides())    
    }
}
const Home = connect(mapStateToProps,mapDispatchToProps)(HomePage)

export {Home}

