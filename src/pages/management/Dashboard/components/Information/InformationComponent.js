import { Row } from './Row/RowComponent';
import styles from './Information.module.scss';
import store from '../../../../../redux/store';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalComponent } from './Modal/ModalComponent';
import { Button, Grid, Toolbar, Typography } from '@mui/material';
import { createProductAction, deleteProductAction, updateProductAction } from '../../../../../redux/actions/ProductAction';
import { DataTable } from './DataTable/DataTableComponent';
import { toast } from 'react-toastify';

export const Information = () => {

  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const handleOpen = () => { setOpen(true) };
  const handleClose = useCallback(() => {
    setOpen(false)
    setItem(null)
  }, [setOpen]);
  // const handleOpenAdd = () => { setIsAdd(true) };
  // const handleOpenEdit =  useCallback(() => setIsAdd(false), [setIsAdd]);


  //======================To Add Item in table ==================================
  const handleAddProduct = () => {
    handleOpen()
  }

  const dispatch = useDispatch();
  const onSubmit = React.useCallback((values) => {
    console.log('table')
    // !item ? dispatch(createProductAction(values)) : dispatch(updateProductAction(values));
    if (!item) {
      dispatch(createProductAction(values))
      toast.success('عملیات موفق انجام شد.')
    } else {
      dispatch(updateProductAction(values))
      toast.success('عملیات موفق انجام شد.')
    }
    handleClose();
  }, [dispatch, handleClose, item])
  //========================To Delete Item in table ============================
  const handleDelete = (id) => {
    dispatch(deleteProductAction(id))
    toast.success('عملیات موفق انجام شد.')
  }

  //=======================To Edit  Item in table ==============================
  const handleEdit = (item) => {
    handleOpen()
    setItem(item);
  }


  return <Grid container className={styles.root}>
    <Grid container>

      <Toolbar sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Typography>مدیریت کالاها</Typography>
        <Button onClick={handleAddProduct} variant="contained" size="small">افزودن کالا</Button>
      </Toolbar>
    </Grid>
    {/* <div className={styles.information_box}>
      <table className="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>ردیف</th>
            <th>تصویر </th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th>تغییرات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <Row key={item.id} item={item} />)}
        </tbody>
      </table>
    </div> */}
    <Grid container>
      <DataTable handleDelete={handleDelete} handleEdit={handleEdit} />
    </Grid>
    <Grid container>
      <ModalComponent open={open} onClose={handleClose} onSubmit={onSubmit} item={item} />
    </Grid>
    {/* <ModalComponent  isAdd={false} openEdit={openEdit} onClose={handleCloseEdit} item={item} /> */}
  </Grid>;
}

