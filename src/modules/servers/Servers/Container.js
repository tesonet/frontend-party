import { ascend, prop, sortWith } from 'ramda';
import { connect } from 'react-redux';
import { compose, mapProps, withHandlers } from 'recompose';
import { purgeToken } from '../../login';
import Servers from './Component';
import withServers from '../withServers';

const sortByDistanceAndName = sortWith([
  ascend(prop('distance')),
  ascend(prop('name')),
]);

export default compose(
  connect(null, {
    onLogout: purgeToken,
  }),
  withHandlers({
    onClickLogout: ({ onLogout }) => () => onLogout(),
  }),
  // fetch servers list
  withServers,
  mapProps(({ servers, ...props }) => ({
    servers: sortByDistanceAndName(servers),
    ...props,
  })),
)(Servers);
