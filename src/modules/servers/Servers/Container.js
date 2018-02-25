import { ascend, isNil, pipe, prop, sortWith } from 'ramda';
import { connect } from 'react-redux';
import { branch, compose, mapProps, withHandlers } from 'recompose';
import { purgeToken, withToken } from '../../login';
import Servers from './Component';
import redirectToLogin from './redirectToLogin';
import withServers from '../withServers';

const getToken = prop('token');

const sortByDistanceAndName = sortWith([
  ascend(prop('distance')),
  ascend(prop('name')),
]);

export default compose(
  // get token from store
  withToken,
  branch(
    // if token is null
    pipe(getToken, isNil),
    // redirect to login
    redirectToLogin,
    // else
    compose(
      connect(null, {
        onLogout: purgeToken,
      }),
      withHandlers({
        onClickLogout: ({ onLogout }) => () => onLogout(),
      }),
      // fetch servers list
      withServers(getToken),
      mapProps(({ servers, ...props }) => ({
        servers: sortByDistanceAndName(servers),
        ...props,
      })),
    ),
  ),
)(Servers);
