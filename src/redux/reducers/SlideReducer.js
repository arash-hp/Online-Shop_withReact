const initialState = {
    slides: []
};

const SlideReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SLIDE_SET_SLIDES':
            return { ...state, slides: action.payload };
        default:
            return state
    }
};

export { SlideReducer }