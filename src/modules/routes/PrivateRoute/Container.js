import { compose, mapProps } from 'recompose';
import { withToken } from '../../login';
import PrivateRoute from './Component';

export default compose(
  withToken,
  mapProps(({ token, ...props }) => ({
    isAuthenticated: Boolean(token),
    ...props,
  })),
)(PrivateRoute);
