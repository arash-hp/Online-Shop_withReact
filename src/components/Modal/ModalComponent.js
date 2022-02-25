import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { FileUploader } from "../FileUploade";

const currencies = [
    {
        value:
        {
            "id": 1,
            "name": "کفش",
            "icon": "65ddd8b1bbce4d8396b62611147fa1d6"
        },
        label: 'کفش',
    },
    {
        value:
        {
            "id": 2,
            "name": "کوله",
            "icon": "65ddd8b1bbce4d8396b62611147fa1d6"
        },
        label: 'کوله',
    },
    {
        value:
        {
            "id": 3,
            "name": "کاپشن",
            "icon": null
        },
        label: 'کاپشن',
    },
    {
        value:
        {
            "id": 1004,
            "name": "فونت",
            "icon": null
        }
        ,
        label: 'فونت',
    },
    {
        value:
        {
            "id": 1005,
            "name": "گرافیک",
            "icon": null
        }
        ,
        label: 'گرافیک',
    },
    {
        value:
        {
            "id": 1006,
            "name": "افکت صوتی",
            "icon": null
        },
        label: 'افکت صوتی',
    },
    {
        value:
        {
            "id": 1007,
            "name": "قالب آماده",
            "icon": null
        },
        label: 'قالب آماده',
    },
    {
        value:
        {
            "id": 1008,
            "name": "قالب سایت",
            "icon": null
        },
        label: 'قالب سایت',
    },
    {
        value:
        {
            "id": 1009,
            "name": "پلاگین",
            "icon": null
        },
        label: 'پلاگین',
    },
];


const initialValues = { name: "", price: "", count: "", category: "", image: "", thumbnail: "", description: "" }


export const ModalComponent = ({ open, onClose, onSubmit ,item}) => {
    const [currency, setCurrency] = React.useState('');
    const [description, setDescription] = React.useState('');



    //==================  Choose category =======================
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    //================== Description ============================
    const describeChange = (event, editor) => {
        const describeData = editor.getData();
        setDescription(describeData)
    }

    //====================
    const handleSubmit = (values) => {
        onSubmit({ ...values, category: currency, description })
    }


    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                افزودن کالا
            </DialogTitle>
            <Formik
                initialValues={item}

                onSubmit={handleSubmit}>

                <Form sx={{ marginLeft: '30px' }}>
                    <DialogContent >

                        <Grid container direction='column' spacing={2} sx={{ overflow: 'hidden' }}>
                            <Grid container item spacing={2} sx={{ display: 'flex', alignItems: 'stretch' }} >
                                <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FileUploader
                                        margin="normal"
                                        label="تصویر اصلی کالا"
                                        name="image"
                                        sx={{
                                            mb: 2,
                                        }}
                                    />
                                </Grid>
                                <Grid item sx={{ width: '500px' }}>
                                    <Field name='name'>{(fieldProps) => {
                                        // console.log('modal', fieldProps)
                                        return <TextField
                                            {...fieldProps.field}
                                            margin="normal"
                                            fullWidth
                                            label="نام کالا"


                                        />
                                    }}</Field>
                                </Grid>
                                <Grid item sx={{ width: '500px' }}>
                                    <Field name='brand'>{(fieldProps) => {
                                        // console.log('modal', fieldProps)
                                        return <TextField
                                            {...fieldProps.field}
                                            margin="normal"
                                            fullWidth
                                            label="نام برند"


                                        />
                                    }}</Field>
                                </Grid>
                                <Grid item sx={{ width: '250px' }}><Field name='price' >
                                    {(fieldProps) => {
                                        return <TextField
                                            {...fieldProps.field}
                                            margin="normal"
                                            fullWidth
                                            name="price"
                                            label="قیمت"
                                            type='number'
                                        />
                                    }}</Field></Grid>
                                <Grid item sx={{ width: '250px' }}><Field name='count' >{(fieldProps) => {
                                    return <TextField
                                        {...fieldProps.field}
                                        margin="normal"
                                        fullWidth
                                        name="count"
                                        label="تعداد"
                                        type='number'
                                    />
                                }}</Field></Grid>
                                <Grid item ><Field name='category'>
                                    {(fieldProps) => {
                                        return <TextField
                                            {...fieldProps.field}
                                            id="outlined-select-currency"
                                            select
                                            name="category"
                                            label=" دسته بندی را انتخاب کنید ..."
                                            value={currency.value}
                                            onChange={handleChange}
                                            // helperText="لطفا دسته بندی را انتخاب کنید"
                                            sx={{ width: '235px' }}
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    }}
                                </Field>
                                </Grid>
                                <Grid item sx={{ width: '250px' }} >
                                    <Field name='description'>
                                        {(fieldProps) => {
                                            return <CKEditor
                                                {...fieldProps.field}
                                                editor={ClassicEditor}
                                                name="description"
                                                config={{ language: 'fa' }}
                                                onChange={describeChange}
                                            />
                                        }}
                                    </Field>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            <Typography variant="h6" sx={{ color: "white" }}>ذخیره</Typography>
                        </Button>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    );
}