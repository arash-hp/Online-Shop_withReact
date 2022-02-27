import { getAllCategories } from "../../api/CategoryApi"

export const setCategoriesActionType = 'CATEGORY_SET_ALL';

export const setCategoriesAction = (data) => ({ type: setCategoriesActionType, payload: data });

export const getCategories = () => {
    return (dispatch) => {
        return getAllCategories()
            .then(response => {
                const entries = response.map((item)=>[item.id,item])
                const data = Object.fromEntries(entries)
                console.log(data)
                dispatch(setCategoriesAction(data))
                return response
            })
    }
}