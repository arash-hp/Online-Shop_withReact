import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Radio, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../redux/actions/CategoryAction";
import { getProducts } from "../../../redux/actions/ProductAction";
import { DataTable } from "./DataTable/DataTableComponent";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import  {ModalComponent} from './Modal/ModalComponent';
import CheckCircle from '@mui/icons-material/CheckCircle';
export const OrdersPage = () => {
    const [item,setItem] = useState(null);
    const [open , setOpen] = useState(false);
    const handleOpen = ()=> setOpen(true);
    const handleClose = ()=> setOpen(false);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch])

    const formStyle = {
        // display: 'flex',
        flexDirection: 'row'

    }

    const handleEdit =(item)=>{
        handleOpen()
        setItem(item)
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
                        <FormControlLabel size="small" control={<Checkbox
                            label="RadioButtonCheckedIcon"
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<RadioButtonCheckedIcon />} />} label="سفارش های تحویل داده شده" />
                        <FormControlLabel size="small" control={<Checkbox
                            label="RadioButtonCheckedIcon"
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<RadioButtonCheckedIcon />} />} label="سفارش های در انتظار ارسال" />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container item>
                <DataTable handleEdit={handleEdit} />
            </Grid>
            <Grid container >
                <ModalComponent open={open} onClose={handleClose} />
            </Grid>
        </Grid>
    </>
}