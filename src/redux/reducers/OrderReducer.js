import { addOrderActionType, setOrdersActionType, removeOrderActionType, deliveredOrderActionType } from "../actions/OrderAction";

const orders = JSON.parse(localStorage.getItem('orders') || '[]')
const initialState = {
    orders
}

export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case setOrdersActionType:
            return { ...state, orders: action.payload };
        case addOrderActionType:
            return { ...state, orders: [action.payload, ...state.orders] };
        case removeOrderActionType:
            return { ...state, orders: state.orders.filter((item) => { return item.id !== action.payload }) };
        case deliveredOrderActionType:
            return { ...state, orders: state.orders.map((item) => item.id !== action.payload ? item : { ...item, delivered: true }) }
        default:
            return state
    }
}
