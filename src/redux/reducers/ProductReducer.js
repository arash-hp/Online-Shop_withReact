import { addProductActionType, removeProductActionType, editProductActionType } from "../actions/ProductAction";

const initialState = {
    products: []
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SLIDE_SET_SLIDES':
            return { ...state, products: action.payload };
        case removeProductActionType:
            return { ...state, products: state.products.filter((item) => { return item.id !== action.payload }) };
        case addProductActionType:
            return { ...state, products: [action.payload, ...state.products] };
        // case editProductActionType:
        //     return { ...state, products: [action.payload, ...state.products] };
        default:
            return state
    }
};
