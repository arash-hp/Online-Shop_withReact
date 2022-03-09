import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrderAction, getOrders } from "../../../redux/actions/OrderAction";
import { DataTable } from "./DataTable/DataTableComponent";
import { ModalComponent } from './Modal/ModalComponent';
export const OrdersPage = () => {


    //=================================
    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setItem(null);
    }

    const orders = useSelector((state) => state.order.orders);
    const filteredOrders = useMemo((item) => {
        return orders.filter((item) => item.delivered === deliveryStatus)
    }, [deliveryStatus, orders])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

//     const dispatch = useDispatch()
//   const handleDelivered = React.useCallback(() => {
//     dispatch(deliverOrderAction(item.id))
//     onClose()
//   }, [dispatch, item.id, onClose])

    console.log('result', orders,filteredOrders,deliveryStatus)

    const formStyle = {
        flexDirection: 'row'
    }

    const handleEdit = (item) => {
        setValue(item)
        handleOpen()
        setItem(item)
    }

    //================radio button========================
    const handleChange = (e) => {
        // const { value } = e.target;
        setDeliveryStatus(e.target.value ==='true')
        // if (value === 'orderIsDone') {
        //     const result = orders.filter((item) => item.delivered)
        //     setResult(result)
        //     console.log('result1', result)
        // }
        // if (value === 'order') {
        //     const result2 = orders.filter((item) => item.delivered === false)
        //     setResult(result2)
        //     console.log('result2', result2)
        // }
    }
    return <>
        <Helmet>
            <title>
                Page | Order
            </title>
        </Helmet>
        <Grid container>
            <Grid container justifyContent={'space-between'} mt={4}>
                <Grid>
                    <Typography ml={5}> مدیریت سفارش ها</Typography>
                </Grid>
                <Grid>
                    <FormGroup sx={{ ...formStyle }}>
                        <RadioGroup
                            onChange={handleChange}
                            value={deliveryStatus}>
                            <Grid>
                                <FormControlLabel size="small"
                                    control={<Radio />} value={false} label="سفارش های در انتظار ارسال" />
                                <FormControlLabel size="small"
                                    control={<Radio />} value={true} label="سفارش های تحویل داده" />
                            </Grid>
                        </RadioGroup>
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container item>
                <DataTable handleEdit={handleEdit} orders={filteredOrders} />
            </Grid>
            <Grid container >
                {!open ? null : <ModalComponent open={open} onClose={handleClose} item={item} />}
            </Grid>
        </Grid>
    </>
}