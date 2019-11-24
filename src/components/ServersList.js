import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// Components
import Server from './Server';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

// Redux Stuff
import { connect } from 'react-redux';
import { getServers } from '../redux/actions/dataActions';

const styles = theme => ({
  ...theme.spreadThis,
  loadingDiv: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
});

class ServersList extends Component {
  componentDidMount() {
    this.props.getServers();
  }

  render() {
    const { servers, loading } = this.props.data;
    const { classes } = this.props;

    return (
      <div className='servers-list'>
        <Grid
          direction='row'
          container
          justify='space-between'
          alignItems='center'
          spacing={0}
          className={classes.serversGrid}
        >
          <Grid item xs={12} className={classes.serversGridItemHeader}>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'
              spacing={0}
              className={classes.listItemContainer}
            >
              <Grid item sm>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.country}
                >
                  Server
                </Typography>
              </Grid>
              <Grid item sm>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.distance}
                >
                  Distance
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {!loading ? (
            servers.map((server, index) => (
              <Grid
                key={index}
                item
                xs={12}
                className={classes.serversGridItem}
              >
                <Server server={server} />
              </Grid>
            ))
          ) : (
            <div className={classes.loadingDiv}>
              <LinearProgress />
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

ServersList.propTypes = {
  classes: PropTypes.object.isRequired,
  getServers: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getServers })(
  withStyles(styles)(ServersList)
);
