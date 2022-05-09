import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button ,TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { PATHS } from '../../../configs/RoutesConfig';
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


const defaultValues = {
    name: '',
    password: '',
};

const LoginComponent = (props) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formValues)
            
            const response = props.login(formValues).then((response) => {
                navigate(PATHS.DASHBOARD);
            });
        } catch (e) {
            console.log('LoginPage-Error')
        }

    }

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
                <form onSubmit={handleSubmit} >
                    <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="نام"
                        type="text"
                        value={formValues.username}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="رمز ورود"
                        type="password"
                        value={formValues.password}
                        onChange={handleInputChange}
                        sx={{marginTop:5}}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: 40 }}>
                        Submit
                    </Button>
                </form>
            </Grid>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: (formValues) => dispatch(login(formValues))
});

export const SignInPage = connect(null, mapDispatchToProps)(LoginComponent);
