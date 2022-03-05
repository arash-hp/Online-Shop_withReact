// import { editStockActionType } from "../actions/StockAction";

// const initialState = {
//     stocks: []
// }

// export const StockReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case editStockActionType:
//             return { ...state, stocks: state.stocks.map((item) => { return (item.id === action.payload.id) ? action.payload : item }) }
//         default:
//             return state
//     }
// }