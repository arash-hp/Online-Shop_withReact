import { addProductActionType, removeProductActionType } from "../actions/SlideAction";

const initialState = {
    slides: []
};

const SlideReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SLIDE_SET_SLIDES':
            return { ...state, slides: action.payload };
        case removeProductActionType:
            return { ...state, slides: state.slides.filter((item) => { return item.id !== action.payload }) };
        case addProductActionType:
            return { ...state, slides: [action.payload, ...state.slides]}
        default:
            return state
    }
};

export { SlideReducer }