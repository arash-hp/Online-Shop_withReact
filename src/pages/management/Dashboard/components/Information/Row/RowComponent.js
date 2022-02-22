import React from 'react';
import styles from './Row.module.scss';
import { deleteProduct } from '../../../../../../api/ProductApi';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../../../../../redux/actions/ProductAction';


export const Row = ({ item }) => {

         
const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteProductAction(item.id))
        // deleteProduct(item.id)
    }




    return <tr className={styles.root}>
        <td>{item.id}</td>
        <td><img src={`http://localhost:3003/files/${item.image}`} /></td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td><button onClick={deleteItem}>حذف</button><button>ویرایش</button></td>
    </tr>

}
