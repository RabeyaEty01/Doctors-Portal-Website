import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);

    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic" label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnChange} variant="standard" />

                        <TextField sx={{ width: "75%", m: 1 }}
                            id="standard-basic" label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange} variant="standard" />

                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button sx={{ width: '75%', m: 1 }} variant="text">New User? Register Now</Button>
                        </NavLink>

                        <Button sx={{ width: '75%', m: 1, color: "info.body" }} type="submit" variant="contained">Login</Button>

                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Login Successfully! </Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError} </Alert>
                        }
                    </form>
                    <Typography variant="body1" gutterBottom>----------------OR------------</Typography>
                    <Button onClick={handleGoogleSignIn} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign In With Google</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;