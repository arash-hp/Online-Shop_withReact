import { editStock } from "../../api/ProductApi";

export const editStockActionType = 'STOCK_EDIT_ITEM';
export const editStockAction = (data) => ({type:editStockActionType , payload:data});


export const updateStockAction = (data) => {
    console.log('stockAction', data)
    const item = Object.entries(data)
    console.log("item",item)
    // console.log(Object.keys(data))
    return (dispatch, getState) => {
        item.map((item)=>{return editStock(item)})
        // editStock(data)
            // .then(response => {

            //     console.log('editAction2', response)

            //     dispatch(editStockAction(data))
            //     return response
            // })
    }
}