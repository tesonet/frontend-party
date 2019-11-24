import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// Redux stuff
import { connect } from 'react-redux';

const styles = theme => ({
  ...theme.spreadThis
});

class Server extends Component {
  render() {
    const {
      classes,
      server: { name, distance },
      user: { loading, authenticated }
    } = this.props;

    let serversList =
      !loading && authenticated ? (
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={0}
          style={{ minHeight: '60px' }}
          className={classes.listItemContainer}
        >
          <Grid item sm>
            <Typography
              variant='body2'
              color='secondary'
              className={classes.countryList}
            >
              {name}
            </Typography>
          </Grid>
          <Grid item sm>
            <Typography
              variant='body2'
              color='secondary'
              className={classes.distanceList}
            >
              {distance} km
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      );

    return serversList;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

Server.propTypes = {
  logoutUser: PropTypes.func,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Server));
