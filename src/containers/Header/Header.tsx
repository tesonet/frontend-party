import React from 'react';
import {
  Button, Grid, makeStyles, Theme,
} from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { initLogout } from 'store/modules/authentication/actions';
import logo from 'assets/img/logo.svg';
import { Link } from 'react-router-dom';
import PATHS from 'shared/constants/PATHS';

interface Props {
  onClick: () => void;
}

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  logo: {
    height: 30,
  },
}));

const Header = (props: Props) => {
  const { onClick } = props;
  const classes = useStyle();

  return (
    <Grid container spacing={3} justify="space-between" alignItems="center" className={classes.root}>
      <Grid item>
        <Link to={PATHS.HOME}>
          <img src={logo} alt="" className={classes.logo} />
        </Link>
      </Grid>
      <Grid item>
        <Button startIcon={<ExitToApp />} size="large" variant="text" onClick={onClick}>
          Logout
        </Button>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = ({
  onClick: initLogout,
});

export default connect(null, mapDispatchToProps)(Header);
