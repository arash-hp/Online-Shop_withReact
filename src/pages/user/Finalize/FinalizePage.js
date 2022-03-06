import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { createOrderAction, getOrders } from "../../../redux/actions/OrderAction";
import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
function formatDate(date) {
    return new Date().toLocaleDateString()
}
const newDate = new Date().toLocaleDateString();
const orderSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('نام را صحیح وارد کنید'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('نام خانوادگی را صحیح وارد کنید'),
    phoneNumber: Yup.string()
        .required("required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(11, "تعداد ارقام کم  است")
        .max(11, "تعداد ارقام زیاد است"),
        deliveryDate: Yup.date().min(new Date()
        // Yup.ref('originalEndDate'),
        // ({ min }) => `Date needs to be after ${formatDate(newDate)}!!`,
    )
});

const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    deliveryDate: '',
}

export const FinalizePage = () => {

    const dispatch = useDispatch()
    const { cart, products } = useSelector((state) => ({ cart: state.shoppingCart, products: state.product.products }))



    const handleSubmit = (values) => {
        const order = {
            ...values, cart: cart.map((item) => ({ ...products.find((product) => product.id === item.id), count: item.count }))
        }
        dispatch(createOrderAction(order))
    }

    return <>
        <Helmet>
            <title>
                Page | Finalize
            </title>
        </Helmet>
        <Grid container justifyContent={'center'}>
            <Grid container width={800}>
                <Typography>
                    نهایی کردن خرید
                </Typography>
                <Formik
                    validationSchema={orderSchema}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}>
                    {({ errors, touched }) => (
                        <Form sx={{ marginLeft: '30px' }}>
                            <Grid container justifyContent={'center'}>
                                <DialogContent >

                                    <Grid container direction='column' spacing={2} sx={{ overflow: 'hidden' }}>
                                        <Grid container item spacing={2} sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center' }} >
                                            <Grid item sx={{ width: '300px' }}>
                                                <Field name='firstName'>{(fieldProps) => {
                                                    // console.log('modal', fieldProps)
                                                    return <TextField
                                                        {...fieldProps.field}
                                                        margin="normal"
                                                        fullWidth
                                                        label="نام خریدار"
                                                    />
                                                }}</Field>{errors.firstName && touched.firstName ? (
                                                    <div>{errors.firstName}</div>
                                                ) : null}
                                            </Grid>
                                            <Grid item sx={{ width: '300px' }}>
                                                <Field name='lastName'>{(fieldProps) => {
                                                    // console.log('modal', fieldProps)
                                                    return <TextField
                                                        {...fieldProps.field}
                                                        margin="normal"
                                                        fullWidth
                                                        label="نام خانوادگی خریدار"
                                                    />
                                                }}</Field>{errors.lastName && touched.lastName ? (
                                                    <div>{errors.lastName}</div>
                                                ) : null}
                                            </Grid>
                                            <Grid item sx={{ width: '300px' }}>
                                                <Field name='address'>{(fieldProps) => {
                                                    // console.log('modal', fieldProps)
                                                    return <TextField
                                                        {...fieldProps.field}
                                                        margin="normal"
                                                        fullWidth
                                                        label="آدرس تحویل محصول"
                                                    />
                                                }}</Field>
                                            </Grid>
                                            <Grid item sx={{ width: '300px' }}><Field name='phoneNumber' >
                                                {(fieldProps) => {
                                                    return <TextField
                                                        {...fieldProps.field}
                                                        margin="normal"
                                                        fullWidth
                                                        label="شماره تلفن"
                                                    />
                                                }}</Field>{errors.phoneNumber && touched.phoneNumber ? (
                                                    <div>{errors.phoneNumber}</div>
                                                ) : null}</Grid>
                                            <Grid item sx={{ width: '600px', paddingTop: '28px !important' }}><Field name='deliveryDate'>
                                                {({field,meta}) => {
                                                    return  <TextField
                                                        {...field}
                                                        error={meta.error}
                                                        helper={meta.error}
                                                        label="تاریخ تحویل"
                                                        type="date"
                                                        sx={{ width: 285 }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                }}
                                            </Field> </Grid>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                    >
                                        <Typography variant="h6" sx={{ color: "white" }}>پرداخت</Typography>
                                    </Button>
                                </DialogActions>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    </>
}