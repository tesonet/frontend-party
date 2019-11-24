import React from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { initLogout } from 'store/modules/authentication/actions';
import { getAll } from 'store/modules/servers/actions';
import * as SERVERS_ACTION_TYPES from 'store/modules/servers/constants';
import { createLoadingSelector } from 'store/modules/loading/selectors';
import FullScreenSpinner from '../../components/FullScreenSpinner/FullScreenSpinner';
import ServersTable from '../../components/ServersTable/ServersTable';
import { Servers as ServersType } from '../../store/modules/servers/types';

interface Props {
  logout: () => void;
  get: () => void;
  servers: ServersType;
  isLoading: boolean;
  classes: any;
}

const styles = (theme: any) => ({
  root: {
    padding: theme.spacing(3),
  },
});

class Servers extends React.Component<Props> {
  componentDidMount(): void {
    const { get, servers } = this.props;

    if (!servers) {
      get();
    }
  }

  render(): React.ReactNode {
    const {
      logout, servers, isLoading, classes,
    } = this.props;

    return isLoading ? (
      <FullScreenSpinner />
    ) : (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item container spacing={3} justify="flex-end">
            <Button startIcon={<ExitToApp />} variant="text" onClick={logout}>Logout</Button>
          </Grid>
          {
            servers && (
              <ServersTable servers={servers} />
            )
          }
        </Grid>
      </div>
    );
  }
}

const loadingSelector = createLoadingSelector([
  SERVERS_ACTION_TYPES.GET_ALL_REQUEST,
]);


const mapStateToProps = (state: any) => ({
  servers: state.servers.all,
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = ({
  logout: initLogout,
  get: getAll,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Servers),
);
