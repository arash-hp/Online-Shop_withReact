import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Helmet } from 'react-helmet';
import { ControlCameraSharp } from '@mui/icons-material';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/UserAction';


const validationSchema = yup.object({
    text: yup
        .string('Enter your UserName')
        // .email('Enter a valid email')
        .required('UserName is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const LoginComponent = () => {

    const formik = useFormik({
        initialValues: {
            text: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });


    return (
        <div>
            <Helmet>
                <title>
                    Page | Login
                </title>
            </Helmet>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 40 }}
            >
                <IconButton>
                    <ManageAccountsIcon
                        sx={{ fontSize: 60, opacity: .8 }}
                    />
                </IconButton>
                <form onSubmit={formik.handleSubmit} >
                    <TextField
                        fullWidth
                        id="text"
                        name="text"
                        label="نام"
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        error={formik.touched.text && Boolean(formik.errors.text)}
                        helperText={formik.touched.text && formik.errors.text}
                    // InputLabelProps={{style:{position:'absolute',right:0}}}

                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="رمز ورود"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    // InputLabelProps={{style:{position:'absolute',right:0}}}

                    />
                    <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: 40 }}>
                        Submit
                    </Button>
                </form>
            </Grid>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data))
    }
}
const LoginPage = connect(null, mapDispatchToProps)(LoginComponent)

export { LoginPage }