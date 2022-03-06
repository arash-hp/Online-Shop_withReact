import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch } from "react-redux";
import { getOrders } from "../../../redux/actions/OrderAction";
import { DataTable } from "./DataTable/DataTableComponent";
import { ModalComponent } from './Modal/ModalComponent';
export const OrdersPage = () => {






    //=================================
    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setItem(null);
    }



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    const formStyle = {
        // display: 'flex',
        flexDirection: 'row'

    }

    const handleEdit = (item) => {
        handleOpen()
        setItem(item)
    }

    //================radio button========================
    const handleChange = (e)=>{
        console.log('e',e.target.checked)
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
                    <Typography> مدیریت سفارش ها</Typography>
                </Grid>
                <Grid>
                    <FormGroup sx={{ ...formStyle }}>
                        <RadioGroup
                        onChange={handleChange}>
                            <Grid>
                                <FormControlLabel size="small"
                                    control={<Radio />} value="female" label="سفارش های در انتظار ارسال" />
                                <FormControlLabel size="small"
                                    control={<Radio />} value="femal" label="سفارش های تحویل داده" />
                            </Grid>
                        </RadioGroup>
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container item>
                <DataTable handleEdit={handleEdit} />
            </Grid>
            <Grid container >
                {!open ? null : <ModalComponent open={open} onClose={handleClose} item={item} />}
            </Grid>
        </Grid>
    </>
}