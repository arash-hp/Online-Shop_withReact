import { setCategoriesActionType } from '../actions/CategoryAction';

const initialState = {
    items: {}
};

export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCategoriesActionType:
            return { ...state, items: action.payload };
        default: return state;
    }
}