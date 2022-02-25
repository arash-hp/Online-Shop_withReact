import React, { useCallback } from 'react';
import styles from './Row.module.scss';
import { deleteProduct } from '../../../../../../api/ProductApi';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createProductAction, deleteProductAction, updateProductAction } from '../../../../../../redux/actions/ProductAction';
import { Button, Dialog, DialogActions, DialogTitle, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ModalComponent } from '../../../../../../components';



export const Row = ({ item }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = useCallback(() => setOpen(false),[setOpen]);
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteProductAction(item.id))
        // deleteProduct(item.id)
    }

    const editItem = () => {

    }

    const onSubmit = React.useCallback((values) => {
        console.log('row',values)
        dispatch(updateProductAction(values))
        handleClose();
      }, [dispatch, handleClose])



    return <> <tr className={styles.root}>
        <td>{item.id}</td>
        <td><img src={`http://localhost:3003/files/${item.image}`} /></td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td><button onClick={deleteItem}>حذف</button><button onClick={handleOpen} >ویرایش
            <ModalComponent open={open} onClose={handleClose} onSubmit={onSubmit} item={item} />
        </button></td>
    </tr>
    </>
}
