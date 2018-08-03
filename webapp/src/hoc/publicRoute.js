import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { ROUTE_PATH as serversRoute } from '../containers/Servers/ServersContainer';

export default connectedRouterRedirect({
  redirectPath: serversRoute,
  authenticatedSelector: state => state.auth.isLoggedIn !== true,
  wrapperDisplayName: 'PublicRoute'
});
