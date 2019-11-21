import React from 'react';
import Login from 'components/Login/Login';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import background from 'assets/img/home-background.svg';
import logo from 'assets/img/logo.svg';

const useStyle = makeStyles((theme) => ({
  root: {
    height: '100vh',
    minHeight: 'max-content',
    padding: theme.spacing(4),
    display: 'flex',
    backgroundImage: `url(${background})`,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundSize: 'cover',
  },
  logo: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 360,
  },
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid spacing={3} container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img src={logo} alt="" className={classes.logo} />
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Login />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
