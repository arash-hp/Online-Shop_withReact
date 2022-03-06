export const addToCartActionType = 'CART_ADD_ITEM';
export const removerFromCartActionType = 'CART_REMOVE_ITEM';
export const clearCartActionType = 'CART_CLEAR_ALL';
export const setCountCartActionType = 'CART_SET_ITEM_COUNT';

export const addToCartAction = (data) => ({ type: addToCartActionType, payload: data });
export const removerFromCartAction = (id) => ({ type: removerFromCartActionType, payload: id });
export const clearCartAction = () => ({ type: clearCartActionType });
export const setCountCartAction = (id, count) => ({ type: clearCartActionType, payload: { id, count } });
