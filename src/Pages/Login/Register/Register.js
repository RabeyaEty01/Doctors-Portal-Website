import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, authError, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField sx={{ width: "75%", m: 1 }}
                                required
                                id="standard-basic" label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur} variant="standard" />
                            <TextField sx={{ width: "75%", m: 1 }}
                                required
                                id="standard-basic" label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur} variant="standard" />

                            <TextField sx={{ width: "75%", m: 1 }}
                                required
                                id="standard-basic" label="Enter Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur} variant="standard" />

                            <TextField sx={{ width: "75%", m: 1 }}
                                required
                                id="standard-basic" label="Re-Enter Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur} variant="standard" />

                            <NavLink style={{ textDecoration: "none" }} to="/login">
                                <Button sx={{ width: '75%', m: 1 }} variant="text">Already Registered? Please Login</Button>
                            </NavLink>

                            <Button sx={{ width: '75%', m: 1, color: "info.body" }} type="submit" variant="contained">Create Account</Button>
                        </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user.email && <Alert severity="success">User Created Successfully! </Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError} </Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;