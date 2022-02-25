import { addProduct, deleteProduct, editProduct, getProduct } from "../../api/ProductApi";
export const removeProductActionType = 'PRODUCT_REMOVE_ITEM';
export const addProductActionType = 'PRODUCT_ADD_ITEM';
export const editProductActionType = 'PRODUCT_EDIT_ITEM';

export const setSlides = (data) => ({ type: 'SLIDE_SET_SLIDES', payload: data });
export const removeProductAction = (id) => ({ type: removeProductActionType, payload: id });
export const addProductAction = (data) => ({ type: addProductActionType, payload: data });
export const editProductAction = (data) => ({ type: editProductActionType, payload: data });


export const getProducts = () => {
    return (dispatch, getState) => {
        return getProduct()
            .then(response => {
                dispatch(setSlides(response))
                return response
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }
}
export const deleteProductAction = (id) => {
    return (dispatch, getState) => {
        return deleteProduct(id)
            .then(response => {
                dispatch(removeProductAction(id))
                return response
            })
    }
}
export const createProductAction = (data) => {
    return (dispatch, getState) => {
        return addProduct(data)
            .then(response => {

                dispatch(addProductAction(response))
                return response
            })
    }
}

export const updateProductAction = (data) => {
    return (dispatch, getState) => {
        return editProduct(data)
            .then(response => {

                console.log('editAction',response)

                dispatch(editProductAction(data))
                return response
            })
    }
}

