import React from 'react';
import styles from './Row.module.scss';
import { deleteProduct } from '../../../../../../api/ProductApi';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../../../../../redux/actions/ProductAction';
import { Button, Dialog, DialogActions, DialogTitle, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ModalComponent } from '../../../../../../components';



export const Row = ({ item }) => {

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteProductAction(item.id))
        // deleteProduct(item.id)
    }

    const editItem = () => {

    }



    // const [modalShown, toggleModal] = React.useState(false);


    return <> <tr className={styles.root}>
        <td>{item.id}</td>
        <td><img src={`http://localhost:3003/files/${item.image}`} /></td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td><button onClick={deleteItem}>حذف</button><button >
            <ModalComponent />
        </button></td>
    </tr>
    </>
}
