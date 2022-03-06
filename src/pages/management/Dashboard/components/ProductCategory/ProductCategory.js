import { MenuItem, TextField } from '@mui/material'
import { useField } from 'formik'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../../../redux/actions/CategoryAction';
export const ProductCategory = () => {

    const [field] = useField('categoryId')
    const categories = useSelector((state) => state.category.items);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return <TextField
        {...field}
        select
        label=" دسته بندی را انتخاب کنید ..."
        // helperText="لطفا دسته بندی را انتخاب کنید"
        sx={{ width: '235px' }}
    >
        {Object.values(categories).map((option) => (
            <MenuItem key={option.id} value={option.id}>
                {option.name}
            </MenuItem>
        ))}
    </TextField>
}