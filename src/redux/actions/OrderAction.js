import { addOrder, deleteOrder, deliverOrder, getOrder } from "../../api/OrderApi";
import { clearCartAction } from "./ShoppingCart";

export const setOrdersActionType = 'ORDER_SET_ALL';
export const addOrderActionType = 'ORDER_ADD_ITEM';
export const removeOrderActionType = 'ORDER_REMOVE_ITEM';
export const deliveredOrderActionType = 'ORDER_DELIVERED_ITEM';

export const setOrders = (data) => ({ type: setOrdersActionType, payload: data });
export const addOrderAction = (data) => ({ type: addOrderActionType, payload: data });
export const removeOrderAction = (id) => ({ type: removeOrderActionType, payload: id });
export const deliveredOrderAction = (id) => ({ type: removeOrderActionType, payload: id });



export const getOrders = () => {
    return (dispatch, getState) => {
        return getOrder()
            .then(response => {
                dispatch(setOrders(response))
                return response
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}

export const createOrderAction = (data) => {
    return (dispatch, getState) => {
        return addOrder(data)
            .then(response => {
                dispatch(addOrderAction(response))
                dispatch(clearCartAction())
                return response
            })
    }
}

export const deleteOrderAction = (id) => {
    return (dispatch, getState) => {
        return deleteOrder(id)
            .then(response => {
                dispatch(removeOrderAction(id))
                return response
            })
    }
}

export const deliverOrderAction = (id) => {
    
    return (dispatch, getState) => {
        return deliverOrder(id)
            .then(response => {
                console.log("deliverOrderAction",response)
                dispatch(getOrders())
                dispatch(deliveredOrderAction(id))
                return response
            })
    }
}