import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { ROUTE_PATH as loginRoute } from '../containers/Auth/Login/LoginContainer';

export default connectedRouterRedirect({
  redirectPath: loginRoute,
  authenticatedSelector: state => state.auth.isLoggedIn === true,
  wrapperDisplayName: 'PrivateRoute',
  allowRedirectBack: false
});
