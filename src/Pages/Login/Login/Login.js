import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    
    const {user, loginUser, isLoading, authError, googleSignIn} = useAuth();
    const [loginData, setLoginData] = useState();

    const navigate = useHistory();
    const location = useLocation();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    // manual sign in
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        // .then(()=> {

        // })
        e.preventDefault();
    }

    // google sign in
    const handleGoogleSignIn = () => {
        googleSignIn(location, navigate)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: '40%'}} xs={12} md={6}>
                    <Typography variant='h5'>
                        Login
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Your Email'
                            name='email'
                            onChange={handleOnChange}
                            variant='standard'
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id='standard-basic'
                            label='Password'
                            type='password'
                            name='password'
                            onChange={handleOnChange}
                            variant='standard'
                        />
                        <Button variant='contained' sx={{ width: '75%', m: 1}} type='submit'>Log in</Button>
                        <NavLink to='/register' style={{ textDecoration: 'none' }}>
                        <Button variant='text' sx={{ m: 1}}  type='submit'>New User? Please Register.</Button>
                        </NavLink>
                    {isLoading && <CircularProgress />}

                    {/* Success Message */}
                    {user?.email && <Alert severity="success">Logged In Successfully!</Alert>}

                    {/* Error Message */}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}
                    <p>-----------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained' sx={{ width: '75%', m: 1}} type='submit'>Google Sign in</Button>
                </Grid>
                <Grid item sx={{ mt:10}} xs={12} md={6}>
                    <img sx={{ width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
            `
        </Container>
    );
};

export default Login;