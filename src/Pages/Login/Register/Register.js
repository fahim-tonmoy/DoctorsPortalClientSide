import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import React, { useState } from 'react';

import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const {user, registerUser, isLoading, authError} = useAuth();

    const navigate = useHistory();
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        registerUser(loginData.name, loginData.email, loginData.password, navigate)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: '40%'}} xs={12} md={6}>
                    <Typography variant='h5'>
                        Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Your Name'
                            type='text'
                            name='name'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Your Email'
                            type='email'
                            name='email'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Password'
                            type='password'
                            name='password'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Confirm Password'
                            type='password'
                            name='password2'
                            onBlur={handleOnChange}
                            variant='standard'
                        />
                        <Button variant='contained' sx={{ width: '75%', m: 1}} type='submit'>Register</Button>
                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                        <Button variant='text' sx={{ m: 1}}  type='submit'>Already Registered? Please Login.</Button>
                        </NavLink>
                    </form>}
                    {/* Loading  */}
                    {isLoading && <CircularProgress />}

                    {/* Success Message */}
                    {user?.email && <Alert severity="success">User created Successfully!</Alert>}

                    {/* Error Message */}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item sx={{ mt:10}} xs={12} md={6}>
                    <img sx={{ width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
            `
        </Container>
    );
};

export default Register;