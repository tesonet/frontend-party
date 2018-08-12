import { IAppState } from 'common/store/types';
import { connect } from 'react-redux';
import PrivateRoute from './component';

export default connect((state: IAppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  redirectTo: '/sign-in'
}))(PrivateRoute);
