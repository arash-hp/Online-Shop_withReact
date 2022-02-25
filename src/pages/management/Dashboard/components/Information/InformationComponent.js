import { Row } from './Row/RowComponent';
import styles from './Information.module.scss';
import store from '../../../../../redux/store';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderProduct } from './Header/ModalComponent';
import { Button, Toolbar, Typography } from '@mui/material';
import { createProductAction } from '../../../../../redux/actions/ProductAction';


export const Information = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true) };
  const handleClose = useCallback(() => setOpen(false),[setOpen]);

  const data = useSelector((state) => state.product.products)

  const dispatch = useDispatch();
  const onSubmit = React.useCallback((values) => {
    dispatch(createProductAction(values))
    handleClose();
  }, [dispatch, handleClose])

  // const [isOpen, setIsOpen] = useState(false);

  return <div className={styles.root}>
    {/* <div className={styles.title}> */}
    {/* <h2>مدیریت کالاها</h2> */}
    {/* <button onClick={() => setIsOpen(true)}>ذخیزه</button> */}
    {/* <HeaderProduct /> */}
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography>مدیریت کالاها</Typography>
      <Button onClick={handleOpen}>افزودن کالا</Button>
    </Toolbar>
    {/* </div> */}
    <div className={styles.information_box}>
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
    </div>
    {/* {isOpen && <Popup setIsOpen={setIsOpen} />} */}
    <HeaderProduct open={open} onClose={handleClose} onSubmit={onSubmit} />
  </div>;
}

