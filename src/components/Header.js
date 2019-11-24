import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppLogoB from '../images/logo-b.svg';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

//Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Redux Stuff
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';

const styles = theme => ({
  ...theme.spreadThis
});

class Header extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='header'>
        <Grid
          direction='row'
          container
          justify='space-between'
          alignItems='center'
          spacing={0}
          className={classes.headerTop}
        >
          <Grid item sm>
            <img src={AppLogoB} alt='appImg' className='logoImage' />
          </Grid>
          <Grid item sm className={classes.logoutButton}>
            <Tooltip title='Logout' placement='top'>
              <Button
                onClick={this.handleLogout}
                className={classes.logoutBtn}
                startIcon={<ExitToAppIcon />}
              >
                Logout
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapActionsToProps = { logoutUser };

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default connect(null, mapActionsToProps)(withStyles(styles)(Header));
