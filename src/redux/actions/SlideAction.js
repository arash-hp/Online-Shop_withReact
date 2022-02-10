import { GetSlider } from "../../api/SliderApi";

export const setSlides = (data) => ({ type:'SLIDE_SET_SLIDES', payload: data });

export const getSlides = () => {
    return (dispatch, getState) => {
        return GetSlider()
            .then(response => {
                console.log('slides', response);
                dispatch(setSlides(response))
                return response
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}