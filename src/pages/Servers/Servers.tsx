import React, { useEffect } from 'react';
import {
  Grid, makeStyles, Theme, Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getAll } from 'store/modules/servers/actions';
import * as SERVERS_ACTION_TYPES from 'store/modules/servers/constants';
import { createLoadingSelector } from 'store/modules/loading/selectors';
import FullScreenSpinner from 'components/FullScreenSpinner/FullScreenSpinner';
import ServersTable from 'components/ServersTable/ServersTable';
import { Servers as ServersType } from 'store/modules/servers/types';
import Header from 'containers/Header/Header';

interface Props {
  getServers: () => void;
  servers: ServersType;
  isLoading: boolean;
}

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

const Servers = (props: Props) => {
  const { getServers, servers, isLoading } = props;
  const classes = useStyle();

  useEffect(() => {
    if (!servers) {
      getServers();
    }
  });

  return isLoading ? (
    <FullScreenSpinner />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Header />
        {
          servers ? (
            <ServersTable servers={servers} />
          ) : (
            <Typography>No servers found.</Typography>
          )
        }
      </Grid>
    </div>
  );
};


const loadingSelector = createLoadingSelector([
  SERVERS_ACTION_TYPES.GET_ALL_REQUEST,
]);


const mapStateToProps = (state: any) => ({
  servers: state.servers.all,
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = ({
  getServers: getAll,
});

export default connect(mapStateToProps, mapDispatchToProps)(Servers);
