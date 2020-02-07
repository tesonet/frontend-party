import React from 'react';
import { Button, CssBaseline, TextField, Grid, Typography, Container, InputAdornment } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";
import logo from '../../assets/tesioLogo.png'
import useStyles from './styles'
import actions from './actions'
import ErrorIcon from '@material-ui/icons/Error';

function Login() {
    const history = useHistory()
    const classes = useStyles()
    const {handleUsername, handlePassword, handleLogin, failedLogin} = actions(history);

    return (
        <Grid container component="main" className={classes.root}>
            <Container  component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <img src={logo} alt="logo"/>
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    onChange={handleUsername}
                                    fullWidth
                                    name="username"
                                    placeholder="Username"
                                    InputProps={{
                                        classes: {
                                            root: classes.input,
                                            focused: classes.cssFocused
                                        },
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon className={classes.icons}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    onChange={handlePassword}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    InputProps={{
                                        classes: {
                                            root: classes.input,
                                            focused: classes.cssFocused
                                        },
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon className={classes.icons} />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid hidden={!failedLogin}>
                            <div className={classes.failedLogin}>
                                <ErrorIcon className={classes.errorIcon} fontSize='small'/>
                                Incorrect username or password
                            </div>
                        </Grid>
                        <Button
                            onClick={handleLogin}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Log in
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    );
}

export default Login;
