import { addToCartActionType, clearCartActionType, removerFromCartActionType, setCountCartActionType } from "../actions/ShoppingCart";

const initialState = JSON.parse(localStorage.getItem('shoppingCart') || '[]')
const updateStorage = (shoppingCart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}


export const ShoppingCartReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case addToCartActionType:
            const index = state.findIndex((item) => item.id === action.payload.id)
            if (index !== -1) {
                const item = state[index]

                newState = [...state.slice(0, index), { ...item, count: item.count + +action.payload.count }, ...state.slice(index + 1, state.length)];
                break
            }

            newState = [...state, { ...action.payload }];
            break
        case clearCartActionType:
            newState = [];
            break
        case removerFromCartActionType:
            newState = state.filter((item) => { return item.id !== action.payload });
            break
        case setCountCartActionType:
            const { id, count } = action.payload
            newState = state.map((item) => item.id === id ? { ...item, count:+count } : item);
            break
        default:
            newState = state
    }
    updateStorage(newState)
    return newState
}
